const router = require('express').Router();
let user = require('./models/user.model.js');
const jwt = require('jsonwebtoken');


router.route('/api/user/signup').post((req, res) => {

    //  const uname = req.body.username;
    //const pword = req.body.password;
    //console.log(req.body.username);
    const newUser = new user({
        username: req.body.username,
        password: req.body.password
    });

    newUser.save()
        .then(
            console.log(`User ${req.body.username} added to the database`),
            jwt.sign({ newUser }, 'secretkey', { expiresIn: '10m' }, (err, token) => {
                res.json({ token });
            })
        );
    // .catch(err => res.status(400).json("Error" + err));

});



module.exports = router;