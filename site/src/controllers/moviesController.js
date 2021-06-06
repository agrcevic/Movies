
const path = require('path');

const db = require('../../../database/models');

module.exports = {
    index: function (req, res){
         db.Movies.findall()
        .then(function(allMovies){
           return res.render('index', {allMovies}) 
        })
        .catch(err=>{
            console.log(err);
        })
       // let listMovies = {titulo: 'las aventuras de chatran', tipo: 'aventura', actor: 'john sarasa'};
        //return res.render('index', {listMovies})
    }
}

