const chalk = require("chalk");

const express = require("express");
const router = express.Router();

const path = require("path");
const moviesController = require(path.resolve(__dirname,"../controllers/moviesController"));

router.get("/", moviesController.index);

module.exports = router;

//crud
// Rutas de Controller
/*
router.get('/create', moviesController.create);
router.get('/:id', moviesController.show);
router.post('/', upload.single('images'), moviesController.store);
router.get('/:id/edit', moviesController.edit);
router.put('/:id', upload.single('images'), moviesController.update);
router.delete('/:id', moviesController.destroy);
*/