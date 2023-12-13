const express= require('express');
// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.urlencoded({extended: true}));
const ReviewCntrl= require("../controllers/review");
const ensureLoggedIn = require('../config/ensureLoggedIn');
const ensureLoggedInAdmin = require('../config/ensureLoggedInAdmin');

//Routes
router.get("/add", ensureLoggedIn, ReviewCntrl.review_create_get);
router.post("/add", ensureLoggedIn, ReviewCntrl.review_create_post);
router.get("/index", ReviewCntrl.review_index_get);
router.get("/detail", ReviewCntrl.review_show_get);
router.get("/delete", ensureLoggedIn, ReviewCntrl.review_delete_get);
router.get("/edit", ensureLoggedIn, ReviewCntrl.review_edit_get);
router.post("/update", ensureLoggedIn, ReviewCntrl.review_update_post);








module.exports = router;