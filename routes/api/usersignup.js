const router = require("express").Router();
const User = require('../../models/user.js');
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

// POST route to register a user
router.post('/register', function(req, res) {
    const { username, password } = req.body;
    const user = new User({ username, password });
    User
      .findOne({username: username}, function(err, dbModel){
        if (dbModel) {
          res.status(200).send("User already exists")
        } else {
          user.save(function(err) {
            if (err) {
              res.status(200)
                .send("Error registering new user please try again.");
            } else {
              res.status(201).send("Successfully created user. Welcome!");
            }
          });
        }
      })

});

router.post('/register',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/register',
                                   failureFlash: true })
);