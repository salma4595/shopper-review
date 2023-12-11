///things we require
const express = require('express')
///require passport
const router = express.Router()
const passport = require('passport')

///require the controller
const indexCtrl = require('../controllers/index')


///routes
///index route
router.get('/', indexCtrl.index_get)

///passport routes
///this is login 
router.get("/aot/google", passport.authenticate("google",{
///request the profile which we declared in passport.js and email
    scope:["profile","email"]
}))


///this is callback
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/',
      failureRedirect: '/'
    } ))

///now the logout route
router.get('/logout', function(req,res){
    req.logout(function(){
        res.redirect('/')
    })
})



module.exports = router;