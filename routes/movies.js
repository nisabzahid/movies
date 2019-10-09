const router = require('express').Router();
let movie = require('./models/movie.model.js');
const jwt = require('jsonwebtoken');


router.route('/api/movies').get((req, res) => {

    // _id is set to zero so that the object id does not return in the output
    movie.find({}, { _id: 0 })
        .then(movies => { res.json(movies); })
        .catch(err => res.status(400).json('ERROR: ' + err));




});



module.exports = router;