const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        let filename = file.fieldname + '-' + Date.now() + '-' + file.originalname;
        // var name for img
        //req.body.thumbnail = `/uploads/${filename}`;
      cb(null, filename)
    }
  })
  let upload = multer({ storage: storage })

// Middlewares
// router.use(express.urlencoded({extended: true}));

// All routes start with /shop
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /index
router.get('/index', shopController.shop_index_get);

// GET /add
router.get('/add',ensureLoggedIn, shopController.shop_add_get);

// POST /add
router.post('/add', ensureLoggedIn, upload.fields([{name: 'thumbnail'}, {name: 'shopImages'}]),shopController.shop_add_post);

// GET /detail
router.get('/detail', shopController.shop_detail_get);

// GET /edit
router.get('/edit', shopController.shop_edit_get);

// POST /edit
router.post('/edit', shopController.shop_edit_post);

// GET /delete
router.get('/delete', shopController.shop_delete_get);

// POST /upload
// router.post('/upload', upload.single('image'), shopController.shop_thumbnail_post);

module.exports = router;