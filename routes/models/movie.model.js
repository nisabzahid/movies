const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: { type: String },
    year: { type: Date },
    rating: { type: Number },
    nation: { type: String },
    actors: []
});


const movie = mongoose.model('movie', movieSchema);

module.exports = movie;

[{
    title: 'title',
    year: 'year',
    rating: 'rating',
    actors: [{
        name: 'name',
        birthday: 'birthday',
        country: 'country'
    }]
}]