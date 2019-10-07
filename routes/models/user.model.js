const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3,
        index: true
    },
    password: {
        type: String,
        require: true
    }
});


const user = mongoose.model('user', userSchema);

module.exports = user;