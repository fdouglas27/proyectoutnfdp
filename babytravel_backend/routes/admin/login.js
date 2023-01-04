var express = require('express');
var router = express.Router();
var usersModel = require('../../models/usersModel'); //no necesito traer la base de datos porque la llamo en usersModel.js

router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

router.post('/', async (req, res, next) => {
    try {
        var user = req.body.user;
        var password = req.body.password;

        var data = await usersModel.getUserByUsernameAndPassword(user, password);

        if (data != undefined) {
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;