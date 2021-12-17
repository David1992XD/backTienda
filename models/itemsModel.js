const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Imagen: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);