const mongoose = require('mongoose');
const User = mongoose.model('User');
const encryption = require('./../utilities/encryption');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register', {
            title: 'register yourself',
            css: 'register.css'
        });
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
                   registerArguments: registerArguments,
                   title: 'register yourself',
                   css: 'register.css'
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
                                registerArguments: registerArguments,
                                title: 'register yourself',
                                css: 'register.css'
                            });
                        } else {
                            res.redirect('/');
                        }
                    });
                });
           }
        });
    },

    profileGet: (req, res) => {
        if (!req.isAuthenticated()) {
            res.render('index', {
                error: 'Please log in',
                title: 'Cat Shop',
                css: 'login.css'
            });

            return;
        }

        res.render('user/profile', {
            title: 'Welcome!',
            css: 'login.css'
        });
    }
};