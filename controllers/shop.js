const Shop = require('../models/Shop');

// get index page
exports.shop_index_get = (req, res) => {
    console.log('inside shop controller index get');
    res.render('shop/index');
}