const router = require('express').Router();
let user = require('./models/user.model.js');
const jwt = require('jsonwebtoken');


router.route('/api/user/login').post((req, res) => {

    const userLogin = new user({
        username: req.body.username,
        password: req.body.password
    });
    user.findOne({ username: req.body.username }, (err, users) => {
        console.log(users);
        //console.log(users.username == req.body.username && users.password == req.body.password);
        if (users !== null) {
            if (users.username == req.body.username && users.password == req.body.password) {
                //console.log(users.username + ' ' + req.body.username + " " + users.password + " " + req.body.password);
                console.log(userLogin);
                jwt.sign({ userLogin }, 'secretkey', { expiresIn: '10m' }, (err, token) => {
                    res.json({ token });
                });
            } else {
                res.status(400).json('Error: Password or username was not right');
            }
        } else { res.status(400).json('Error: User has not signed up or wrong username'); }


    }).catch(err => res.status(400).json("Error" + err));

});
module.exports = router;