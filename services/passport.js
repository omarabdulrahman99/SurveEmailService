const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user,done) =>{

	done(null, user.id);//first argument is an error object.

});

passport.deserializeUser(() => {


});

passport.use(new GoogleStrategy({

	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL:'/auth/google/callback'

  }, (accessToken, refreshToken, profile, done) => {

  		User.findOne({ googleId: profile.id })//cant set var user = to this result bc this returns a promise.
  			.then((existingUser) => {
  				if(existingUser){

  					done(null, existingUser);

  				}else{

  					new User({googleId: profile.id}).save()
  							.then(user => done(null, user));
  				}

  			})
  		

  })
);


