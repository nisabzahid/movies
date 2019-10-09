const router = require('express').Router();
let actor = require('./models/actors.model.js');




// _id is set to zero so that the object id does not return in the output
router.route('/api/actors').get((req, res) => {
    actor.find({}, { _id: 0 })
        .then(actors => { res.json(actors); })
        .catch(err => res.status(400).json('ERROR: ' + err));
});

module.exports = router;