const Accesorios = require("../models/accesoriesModel");

exports.obtenerAccesorios = async(req, res) => {
    try {
        let accesorios = await Accesorios.find();
        res.json(accesorios)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error, cominiquese con el departamento de sistemas');
    }
}