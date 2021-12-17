const express = require('express');
const router = express.Router();
const productsController = require('../controllers/controllerProducts');
const userController = require('../controllers/controllerUsers');
const accesoriesController = require('../controllers/controllerAccesories');

router.get('/login/user', userController.obtenerUsuario);

router.post('/login/createUser', userController.crearUsuario);

router.get('/accesories', accesoriesController.obtenerAccesorios)

router.get('/products', productsController.obtenerProductos);



module.exports = router;