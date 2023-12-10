const Shop = require('../models/Shop');

// get index page
exports.shop_index_get = (req, res) => {
    res.render('shop/index');
}

// get add shop page
exports.shop_add_get = (req, res) => {
    res.render('shop/add');
}