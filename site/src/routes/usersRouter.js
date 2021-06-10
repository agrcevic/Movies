const express = require('express');
const router = express.Router();

const userController = require ('../controllers/usersController');
//const authMiddleware = require('../middlewares/authMiddleware');

router.get('/listUsers', authMiddleware, userController.listUsers);//para saber si tiene permiso para ver la lista de usuarios

router.get ('/login',userController.login);
router.post ('/login',userController.processLogin);

router.get ('/logout',userController.logout);

router.get ('/register',userController.register);
router.post('/register', userController.processRegister);

module.exports = router;
