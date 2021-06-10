
const bcryptjs = require('bcryptjs');
const db = require("../../../database/models");


const controller = {
    login: (req, res) => {
        res.render('users/login');
    },
    processLogin: (req, res) => {
        db.Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function (user){
            if(user && user.email == req.body.email){//si existe el usuario y la contrasenia es correcta
                req.session.user = user.name;
                if(user.rol == 1){
                    req.session.auth = true;
                }else{
                    req.session.auth = false;
                }
                // Chequeo del campo Recordame
                return res.redirect("/");
            }else{//de lo contrario recargamos el login
                res.render('users/login');//volvemos a la pantalla de registro pero con los datos vacios, a futuro poner mensaje de usuario existente
            }
        })
    },
    logout : function(req, res) {
        req.session.destroy();
        res.redirect('/');//deslogueo y voy al home
    },
    register: (req, res) => {
        res.render('users/register');
    },
    processRegister: (req, res) => {
        //buscamos si existe el usuario
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function (user){
            if(!user){//si no existe lo creamos
                db.Users.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    remember_token: req.body.password,
                    rol: req.body.rol
                })
                .then((function () {
                    req.session.user = req.body.name;
				    req.session.auth = true;
                    req.session.user.rol = req.body.rol;
                    // Chequeo del campo Recordame
                    if (req.body.remember != undefined) {
                        // maxAge en ms
                        res.cookie('remember', user.email, { maxAge: 120000})
                    }
                    return res.redirect("/");
                }) )
            }else{//de lo contrario si existe el usuario
                res.render('users/register');//volvemos a la pantalla de registro pero con los datos vacios, a futuro poner mensaje de usuario existente
            }
        })       
    },
    listUsers: (req, res) => {
        db.Users.findAll()
        .then(function (users) {
            return res.render("users/listUsers", { users });
        })
    },
};

module.exports = controller;
            


