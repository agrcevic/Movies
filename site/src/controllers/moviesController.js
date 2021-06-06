const chalk = require("chalk");

const path = require('path');
const router = require("../routes/moviesRouter");

module.exports = {
    index: function (req, res){
        let listMovies = {titulo: 'las aventuras de chatran', tipo: 'aventura', actor: 'john sarasa'};
        return res.render('index', {listMovies})
    }
}


//crud

// a definir const productsTable = jsonTable('products');

const controller = {
    index: (req, res) => {
        let movies = productsTable.all()
        console.log(movies);
        res.render('movies/index', { 
            title: 'movies list', 
            movies      
        });
    },
    create: (req, res) => {
        res.render('movies/create');
    },
    store: (req, res) => {
        // Generamos el nuevo Producto
        let movies = req.body;

        let moviesId = productsTable.create(movies);
        
        res.redirect('/movies/' + moviesId);
    },
    show: (req, res) => {
        let movies = productsTable.find(req.params.id);

        if ( movies ) {
            res.render('movies/detail', { movies });
        } else {
            res.send('movie not found');
        }
    },
    edit: (req, res) => {
        let movies = productsTable.find(req.params.id);

        if ( movies ) {
            res.render('movies/edit', { movies });
        } else {
            res.send('movie not found');
        }
    },
    update: (req, res) => {
        let movies = req.body;
        movies.id = Number(req.params.id);

        let moviesId = productsTable.update(movies);

        res.redirect('/movies/' + moviesId);
    },
    destroy: (req, res) => {
        //let products = productsTable.all()

        productsTable.delete(req.params.id);

        res.redirect('/movies');
    }
}