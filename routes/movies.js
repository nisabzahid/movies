const router = require('express').Router();
let user = require('./models/movie.model.js');
const jwt = require('jsonwebtoken');


router.route('/api/user/movies').get((req, res) => {


    res.json('you have come to the movies page ');

});



module.exports = router;