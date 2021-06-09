const chalk = require('chalk');

const express = require('express');
const router = express.Router();

const path = require("path");
const usersController = require(path.resolve(__dirname,"../controllers/usersController"));


// Registro de usuario
router.get ('/login',usersController.login);
router.post('/login', usersController.processLogin);






module.exports = router;
