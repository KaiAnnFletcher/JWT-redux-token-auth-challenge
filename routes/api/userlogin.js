//User auth config
const User = require('../../models/user.js')
const router = require("express").Router();
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

//At this time, the post-route is defined in the form action as well as the method to use. 
//Now we define the route here



passport.use(new LocalStrategy(

    function(username, password, done) {
        User.findOne ({ username: username }), function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if(!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        }
     }
))

router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);