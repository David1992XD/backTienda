const Users = require("../models/usersModel");
const wrongPassword = { error: "wrong Password", message: 'Data passwrod invalid' }

exports.obtenerUsuario = async(req, res) => {
    try {
        userFind = req.body.user
        let user = await Users.findOne({ user: userFind });
        if (user.password === req.body.password) {
            res.json(user)
        } else {
            res.json(wrongPassword)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error, cominiquese con el departamento de sistemas');
    }
}


exports.crearUsuario = async(req, res) => {
    try {
        let user
        user = new Users(req.body);
        await user.save();
        //res.json(productos)
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... llegue');
    }
}