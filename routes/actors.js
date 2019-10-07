const router = require('express').Router();
let actor = require('./models/actors.model.js');


router.route('/api/actors').get((req, res) => {
    actor.find()
        .then(actors => { res.json(actors); })
        .catch(err => res.status(400).json('ERROR: ' + err));
});

module.exports = router;