const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');
const upload = require('../config/multerUploader');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const ensureLoggedInAdmin = require('../config/ensureLoggedInAdmin');

// Middlewares
// router.use(express.urlencoded({extended: true}));

// All routes start with /shop
// Require the auth middleware

// GET /index
router.get('/index', shopController.shop_index_get);

// GET /add
router.get('/add',ensureLoggedInAdmin, shopController.shop_add_get);

// POST /add
router.post('/add', ensureLoggedInAdmin, upload.fields([{name: 'thumbnail'}, {name: 'shopImages'}]),shopController.shop_add_post);

// GET /detail
router.get('/detail', shopController.shop_detail_get);

// GET /delete
router.get('/delete', shopController.shop_delete_get);

// GET /edit
router.get('/edit', ensureLoggedInAdmin, shopController.shop_edit_get);

// POST /edit
router.post('/edit', ensureLoggedInAdmin, upload.fields([{name: 'thumbnail'}, {name: 'shopImages'}]), shopController.shop_edit_post);

// GET /delete
router.get('/image/delete', ensureLoggedInAdmin, shopController.shop_image_delete_get);

module.exports = router;