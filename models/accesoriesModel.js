const mongoose = require('mongoose');

const accesoriosSchema = mongoose.Schema({
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

module.exports = mongoose.model('Accesorios', accesoriosSchema);