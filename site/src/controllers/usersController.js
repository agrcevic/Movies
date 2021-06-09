
const bcryptjs = require('bcryptjs');
const db = require("../../../database/models");


const controller = {
 //formulario de registro
    login: (req, res) => {
        res.render('login');
    },
    // Registro de Usuario
    processLogin: (req, res) => {

        db.Users.create({
           name: req.body.fullname,
           password: req.body.password,
           email: req.body.email,
        })

        .then(function (users) {
            return res.render("processLogin", {users});
        })
    },
};

module.exports = controller;
            


