///require things
const express = require('express')

///requring controllers
const userCtrl = require("../controllers/user")
const router = express.Router()

// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');



///adding middleware
router.use(express.urlencoded({extended: true}));

///routes

router.get("/add", ensureLoggedIn, userCtrl.user_create_get);
router.post("/add", ensureLoggedIn, userCtrl.user_create_post);
// ///add (getting data and sending user back)
// router.get('/add',userCtrl.user_create_get )
// router.post('/add', userCtrl.user_create_post)
///retreiving user
router.get('/index',ensureLoggedIn, userCtrl.user_index_get)
////
router.get('/detail',ensureLoggedIn, userCtrl.user_detail_get)
///edit data and send back
router.get('/edit',ensureLoggedIn, userCtrl.user_edit_get)
router.post('/edit',ensureLoggedIn, userCtrl.user_edit_post)
///delete data
router.get('/delete',ensureLoggedIn, userCtrl.user_delete_get)


module.exports = router
