const Producto = require("../models/itemsModel");

exports.actualizarProductos = async(req, res) => {
    try {
        let productos = await Producto.find();
        res.json(productos)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error, cominiquese con el departamento de sistemas');
    }
}

exports.obtenerProductos = async(req, res) => {
    try {
        let productos = await Producto.find();
        res.json(productos)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error, cominiquese con el departamento de sistemas');
    }
}