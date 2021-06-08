const express = require("express");
const router = express.Router();

const path = require("path");
const moviesController = require(path.resolve(__dirname,"../controllers/moviesController"));

router.get("/", moviesController.index);

router.get('/create', moviesController.create);
router.post('/create', moviesController.store);

router.get('/:id', moviesController.detail);





module.exports = router;