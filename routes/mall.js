const express= require('express');
// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.urlencoded({extended: true}));
const MallCntrl= require("../controllers/mall");
const upload = require('../config/multerUploader');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const ensureLoggedInAdmin = require('../config/ensureLoggedInAdmin');

// router.use(methodOverride('_method'));
// Require the auth middleware

//Routes
router.get("/add", ensureLoggedInAdmin, MallCntrl.mall_create_get);
router.post("/add", ensureLoggedInAdmin, upload.fields([{name: 'thumbnail'}, {name: 'mallImages'}]) ,MallCntrl.mall_create_post);
router.get("/index", MallCntrl.mall_index_get);
router.get("/detail", MallCntrl.mall_show_get);
router.get("/delete", ensureLoggedInAdmin, MallCntrl.mall_delete_get);
router.get("/edit", ensureLoggedInAdmin, MallCntrl.mall_edit_get);
router.post("/update", ensureLoggedInAdmin, upload.fields([{name: 'thumbnail'}, {name: 'mallImages'}]), MallCntrl.mall_update_post);
// GET /delete
router.get('/image/delete', ensureLoggedInAdmin, MallCntrl.mall_image_delete_get);








module.exports = router;