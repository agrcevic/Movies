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
                //para mostrar la fecha en una forma mejor
                let temp = detailMovie.dataValues.release_date;
                if(temp instanceof Date && temp.getFullYear() > 1900){
                    let year = detailMovie.dataValues.release_date.getFullYear();
                    let month = detailMovie.dataValues.release_date.getMonth()+1;
                    let day = detailMovie.dataValues.release_date.getDate()+1;
                    detailMovie.dataValues.release_date = year+'/'+month+'/'+day;
                }else{
                    detailMovie.dataValues.release_date = 'sin fecha'
                }
                

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
        .then(function () {
            return res.redirect("/home");
        })
    },

    // Modificación de la Película por GET (muestra la pantalla)
    edit: (req, res) => {
        let pedidoMovies = db.Movies.findByPk(req.params.id);
        let pedidoGenre = db.Genres.findAll();

        Promise.all([pedidoMovies, pedidoGenre])
            .then(function ([detailMovie, genres]) {
                //para mostrar la fecha en una forma mejor
                let temp = detailMovie.dataValues.release_date;
                if(temp instanceof Date && temp.getFullYear() > 1900){
                    let year = detailMovie.dataValues.release_date.getFullYear();
                    let month = detailMovie.dataValues.release_date.getMonth()+1;
                    let day = detailMovie.dataValues.release_date.getDate()+1;
                    detailMovie.dataValues.release_date = year+'/'+month+'/'+day;
                }else{
                    detailMovie.dataValues.release_date = 'sin fecha'
                }
                
                
                res.render("movies/update", { detailMovie, genres });
            })
    },
    // Modificación de la Película por PUT (edita la DB)
    update: (req, res) => {
        db.Movies.update({
            title: req.body.title,
            awards: req.body.awards,
            release_date: req.body.release_date,
            genre_id: req.body.genre_id,
            length: req.body.length,
            rating: req.body.rating,
        }, {
            where: {
                id: req.params.id
            }
        });
        return res.redirect("/movies/" + req.params.id);
    },

    // Eliminar pelicula por DELETE y redirecciona al home
    delete: (req, res) => {
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function () {
            return res.redirect("/home");
        })
    },
};

module.exports = controller;
