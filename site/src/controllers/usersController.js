const chalk = require('chalk');

const path = require('path');

module.exports = {
    listUsers: function(req, res){
        let listUsers = {nombre: 'Bond... James Bond'};
        return res.render('users/listUsers', {listUsers});
    }
}
