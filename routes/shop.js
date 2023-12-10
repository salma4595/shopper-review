const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

// All routes start with /shop

// GET /index
router.get('/index', shopController.shop_index_get);

// GET /add
router.get('/add', shopController.shop_add_get);

module.exports = router;