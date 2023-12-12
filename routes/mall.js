const express= require('express');
// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.urlencoded({extended: true}));
const MallCntrl= require("../controllers/mall");
const upload = require('../config/multerUploader');

// router.use(methodOverride('_method'));
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

//Routes
router.get("/add",ensureLoggedIn, MallCntrl.mall_create_get);
router.post("/add",ensureLoggedIn, upload.fields([{name: 'thumbnail'}, {name: 'mallImages'}]) ,MallCntrl.mall_create_post);
router.get("/index", MallCntrl.mall_index_get);
router.get("/detail", MallCntrl.mall_show_get);
router.get("/delete",ensureLoggedIn, MallCntrl.mall_delete_get);
router.get("/edit",ensureLoggedIn, MallCntrl.mall_edit_get);
router.post("/update",ensureLoggedIn, MallCntrl.mall_update_post);








module.exports = router;