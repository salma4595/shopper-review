const express = require('express');
const searchController = require('../controllers/search');

const router = express.Router();
router.use(express.urlencoded({extended: true}));

// All routes start with /search

// GET /index
router.get('/index', searchController.search_index_get);
// POST /index
router.post('/index', searchController.search_index_post)
module.exports = router;