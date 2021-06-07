
const path = require('path');

const db = require('../../../database/models');

module.exports = {
    index: function (req, res){
         db.Movies.findAll()
        .then(function(allMovies){
           return res.render('index', {allMovies}) 
        })
        .catch(err=>{
            console.log(err);
        })
       // let listMovies = {titulo: 'las aventuras de chatran', tipo: 'aventura', actor: 'john sarasa'};
        //return res.render('index', {listMovies})
    }


//experimento!!

 //Mostrar los generos de las películas
 MoviesCreate : function(req, res) {   
    db.Category.findAll()
    .then(function(Genres){
        return res.render('movies/create', {genres})
    })
},


    // Eliminar pelicula
    moviesDelete: (req, res) => {
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect("/");
    },

}