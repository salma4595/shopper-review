
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const User = require('../models/user')

passport.use(new GoogleStrategy(
    {
        clientID: process.env.APP_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    
    },
    async function(theAccessableToken, theRefreshingOfToken, profile, callback){
        try{
    ///c if user exist
    let user = await User.findOne({
        googleId: profile.id
    })
    //if there is user, return it
    if(user){
        return callback(null,user);
    }else{
    //else, create a new user
    
    user = await User.create({
    name: profile.displayName,
    googleId: profile.id,
    ///we put [0] cuz its an array and we want just the first one
    email: profile.emails[0].value,
    
    })
    return callback(null, user);
    }
        }
    catch(error){
        return callback(error)
    }
    
    // return the new user
    
    }
    
    ));

    passport.serializeUser(function(user, callback) {
        callback(null, user._id);
      });
      // Add to bottom of config/passport.js
      passport.deserializeUser(async function(userId, callback) {
          // It's nice to be able to use await in-line!
          callback(null, await User.findById(userId));
        });
      
    