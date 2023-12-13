// require things
const express = require('express')
// requring controllers
const userCtrl = require("../controllers/user")
const router = express.Router()
const upload = require('../config/multerUploader');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');
const ensureLoggedInAdmin = require('../config/ensureLoggedInAdmin');

// adding middleware
router.use(express.urlencoded({extended: true}));

// routes

router.get("/add", ensureLoggedInAdmin, userCtrl.user_create_get);
router.post("/add", ensureLoggedInAdmin, userCtrl.user_create_post);
// ///add (getting data and sending user back)
// router.get('/add',userCtrl.user_create_get )
// router.post('/add', userCtrl.user_create_post)
///retreiving user
router.get('/index',ensureLoggedInAdmin, userCtrl.user_index_get);
// GET /detail
router.get('/detail',ensureLoggedIn, userCtrl.user_detail_get);
// edit data and send back
router.get('/edit',ensureLoggedInAdmin, userCtrl.user_edit_get);
router.post('/edit',ensureLoggedInAdmin, userCtrl.user_edit_post);
// delete data
router.get('/delete',ensureLoggedInAdmin, userCtrl.user_delete_get);
// GET /user/profile
router.get('/dashboard', ensureLoggedIn, userCtrl.user_profile_get);
// POST /user/profile/update
router.post('/update', ensureLoggedIn, upload.single('avatar'), userCtrl.user_profile_update_post);

module.exports = router
