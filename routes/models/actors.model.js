const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const actorSchema = new Schema({
    name: { type: String },
    country: { type: String },
    birthday: { type: Date }
});


const actor = mongoose.model('actor', actorSchema);

module.exports = actor;