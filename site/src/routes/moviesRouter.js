const express = require("express");
const router = express.Router();

const path = require("path");
const moviesController = require(path.resolve(__dirname,"../controllers/moviesController"));
const authMiddleware = require('../middlewares/authMiddleware');

router.get("/", moviesController.index);

router.get('/create', authMiddleware, moviesController.create);
router.post('/create', authMiddleware, moviesController.store);

router.get('/:id', moviesController.detail);

router.get("/movieEdit/:id", authMiddleware, moviesController.edit);
router.put("/movieEdit/:id", authMiddleware, moviesController.update);

router.delete("/delete/:id", authMiddleware, moviesController.delete);

module.exports = router;