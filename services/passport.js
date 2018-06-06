const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');



const keys = require('../config/keys.js');
const User = mongoose.model('users');

passport.serializeUser((user,done) =>{ //turn user model instance to an ID

	done(null, user.id);//first argument is an error object.

});

passport.deserializeUser((id, done) => { //turn id to user model instance

  User.findById(id).then(user => {

    done(null, user);

  })

});

passport.use(new GoogleStrategy({

	clientID: keys.googleClientID, //these to connect to google form login api
	clientSecret: keys.googleClientSecret,
	callbackURL:'/auth/google/callback',
	proxy: true //google strategy, since this is relative path, if we specified https, itll assume http and cause error.
	//you can specify https here, full domain. or specify proxy:true, since googlestrategy doesn't let https return through proxy

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


