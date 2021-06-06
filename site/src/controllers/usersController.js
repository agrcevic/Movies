const chalk = require('chalk');

const path = require('path');

module.exports = userController;

let userController = {
    listUsers: function(req, res){
        let listUsers = {nombre: 'Bond... James Bond'};
        return res.render('users/listUsers', {listUsers});
    },
    
    login: function(req, res){
        res.render('login')
    },

    register: function(req, res){
        res.render('register')
    },

    search: function(req, res){
        let loQueBuscoElUsuario = req.query.search
        res.send('loQueBuscoElUsuario')
    },

    create: function(req, res){
        let user ={
          name: req.body.name,
          age: req.body.age,
          email: req.body.email
        }
        res.send(user)
    }
    //guardarla
  
}


