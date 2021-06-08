// llamo a mi base de datos
const db = require("../../../database/models");

const controller = {
    //musetra el home con todas las peliculas por GET
    index: (req, res) => {
        db.Movies.findAll()
            .then(function (movies) {
                //console.log(movies)
                return res.render("index", { movies });
            })
    },
    // Detalle de la Película por GET y ID
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id,  {
                include: [{association: "genres"}, {association: "actors"}]
            })
            .then(function (detailMovie) {
                res.render("movies/detailMovies", { detailMovie });
            })
    },
   //Muestra el formulario por GET y manda los datos de generos
    create: (req, res) => {
        db.Genres.findAll()
        .then(function (genres) {
            return res.render("movies/create", { genres: genres });
        })
    },
    //Guardar los datos por POST (desde el form del metodo MoviesCreate)
    store: (req, res) => {
        db.Movies.create({
            title: req.body.title,
            awards: req.body.awards,
            release_date: req.body.release_date,
            genre_id: req.body.genre_id,
            length: req.body.length,
            rating: req.body.rating,
        })
        .then(db.Movies.findAll()
            .then(function (movies) {
                return res.render("index", { movies });
            })
        )
    },


};

module.exports = controller;
