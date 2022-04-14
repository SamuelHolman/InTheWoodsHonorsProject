var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/userSchema');

module.exports = function (passport) {
    //passport  serialize and unserialize users out of session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    // ======================SIGNUP ===========================
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with username
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
        // allows us to pass back the entire request to the callback
    },
        function (req, username, password, done) {
            // User.findOne won't fire unless data is sent back
            process.nextTick(function () {

                // find a user whose username is the same as the forms username
                User.findOne({ 'username': username }, function (err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
                    } else {

                        // if there is no user with that username -create the user
                        var newUser = new User();

                        // set the user's local credentials
                        newUser.username = username;
                        newUser.password = newUser.generateHash(password);
                        
                        // save the user
                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });

            });

        }));

    // =================LOCAL LOGIN ======================================

    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, username, password, done) {
            // find a user whose username is the same as the forms username
            User.findOne({ 'username': username }, function (err, user) {
                if (err)
                    return done(err);
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
                // all is well, return successful user
                return done(null, user);
            });
        }));

};