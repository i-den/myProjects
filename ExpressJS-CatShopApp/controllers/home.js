module.exports = {
    homeGet: (req, res) => {
        res.render('index', {title: 'Cat Store'});
    }
};