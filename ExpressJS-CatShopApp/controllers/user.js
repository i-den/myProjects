const User = require('./../models/User');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },
    registerPost: (req, res) => {
        let registerArguments = req.body;
        // vars: firstName, lastName, email, password, address, phoneNumber
        User.findOne({email: registerArguments.email}).then(user => {
           let errorMessage = '';

           if(user) {
               errorMessage = "The email address is already in use. Choose another email!";
           } else if(registerArguments.password !== registerArguments.repeatedPassword) {
               errorMessage = "Passwords do not match!";
           }

           if(errorMessage) {
               registerArguments.error = errorMessage;
               res.render('user/register', {
                   registerArguments: registerArguments
               });
           } else {
                let salt = encryption.generateSalt();
                let passwordHash = encryption.hashPassword(registerArguments.password, salt);

                let currentUserToBeRegistered = {
                    firstName: registerArguments.firstName,
                    lastName: registerArguments.lastName,
                    email: registerArguments.email,
                    passwordHash: passwordHash,
                    salt: salt,
                    address: registerArguments.address,
                    phoneNumber: registerArguments.phoneNumber
                };

                User.create(currentUserToBeRegistered).then(currentUser => {
                    req.logIn(currentUser, (err) => {
                        if(err) {
                            registerArguments.error  = err.message;
                            res.render('user/register', {
                                registerArguments: registerArguments
                            });
                        } else {
                            res.redirect('/');
                        }
                    });
                });
           }
        });
    }
};