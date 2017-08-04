const userController = require('./../controllers/user');
const express = require('express');
const router = express.Router();

router.get('/', userController.registerGet);
router.post('/', userController.registerPost);
router.get('/penis', function (req ,res) {
    res.send("PISHKA");
});
module.exports = router;