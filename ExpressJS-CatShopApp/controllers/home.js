const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    homeGet: (req, res) => {
        res.render('index', {
            title: 'Cat Store',
            css: 'login.css'
        });
    },

    homePost: (req, res) => {
        let loginArguments = req.body;

        User.findOne({email: loginArguments.inputUsername}).then(user => {

            if (!user || !user.authenticate(loginArguments.inputPassword)) {
                let errorMessage = 'Invalid login credentials!';
                res.render('index', {
                    error: errorMessage,
                    title: 'Cat Shop',
                    css: 'login.css'
                });

                return;
            }

            req.logIn(user, (err) => {
                if (err) {
                    res.render('index', {
                        error: err.message,
                        title: 'Cat Shop',
                        css: 'login.css'
                    });
                } else {
                    res.redirect('/profile');
                }
            });
        })
    },

    logout: (req, res) => {
        req.logOut();
        res.redirect('/');
    }
};