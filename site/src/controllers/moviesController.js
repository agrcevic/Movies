const chalk = require("chalk");

const path = require('path');

module.exports = {
    index: function (req, res){
        let listMovies = {titulo: 'las aventuras de chatran', tipo: 'aventura', actor: 'john sarasa'};
        return res.render('index', {listMovies})
    }
}