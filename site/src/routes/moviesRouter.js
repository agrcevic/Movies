const chalk = require("chalk");

const express = require("express");
const router = express.Router();

const path = require("path");
const moviesController = require(path.resolve(__dirname,"../controllers/moviesController"));

router.get("/", moviesController.index);

module.exports = router;
