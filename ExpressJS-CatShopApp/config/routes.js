const homeController = require('./../controllers/home');
const userController = require('./../controllers/user');
const catsController = require('./../controllers/cats');

module.exports = (app) => {
    /**
    *USER ROUTES
    */
    //GET USER REGISTER FORM
    app.get('//register', userController.registerGet);

    //REGISTER NEW USER
    app.post('//register', userController.registerPost);

    //LOGIN WITH GOOGLE
    app.post('');

    /**
    *CAT ROUTES
    */

    //VIEW ALL CATS
    app.get('/cats/index', catsController.catIndexGet);

    //VIEW SINGLE CAT
    app.get('/cats/:catId', catsController.catSingleGet);

    //ADD NEW CAT PAGE
    app.get('/cats/new', catsController.catNewGet);

    //POST NEW CAT OT THE DB
    app.post('/cats/new', catsController.catNewPost);

    //EDIT EXISTING CAT
    app.get('/cats/edit/:catId', catsController.catEditGet);

    //UPDATE EXISTING CAT
    app.post('/:catId', catsController.catUpdatePost);

    //DELETE EXISTING CAT
    app.post('/:catId', catsController.catDeletePost);
};