const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateCreate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Users', UserSchema);