const homeController = require('./../controllers/home');
const userController = require('./../controllers/user');

module.exports = (app) => {
    app.get('/', homeController.homeGet);
    app.post('/', homeController.homePost);
    app.get('/logout', homeController.logout);

    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);

    app.get('/profile', userController.profileGet);

};