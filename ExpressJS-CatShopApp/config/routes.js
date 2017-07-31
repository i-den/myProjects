const homeController = require('./../controllers/home');
const userController = require('./../controllers/user');
const catsController = require('./../controllers/cats');

module.exports = (app) => {
    //INDEX - show login form, redirect to /cats/index if logged in
    app.get('/', homeController.homeGet);

    /**
    *USER ROUTES
    */
    //GET USER REGISTER FORM
    app.get('/user/register', userController.registerGet);

    //REGISTER NEW USER
    app.post('/user/register', userController.registerPost);

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