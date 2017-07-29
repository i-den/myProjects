const homeController = require('./../controllers/home');
const userController = require('./../controllers/user');

module.exports = (app) => {
    app.get('/', homeController.homeGet);

    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);
};