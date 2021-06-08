
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


};

module.exports = controller;