const Shop = require('../models/Shop');
const {Mall} = require('../models/Mall');

// get index page
exports.shop_index_get = (req, res) => {
    Shop.find()
    .then((shops) => {
        res.render('shop/index', {shops});
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.shop_detail_get = (req, res) => {
    // get the shop from DB
    Shop.findById(req.query.id)
    .then((shop) => {
        res.render('shop/detail', {shop});
    })
    .catch((err) => {
        console.log(err);
    })
}

// get add shop page
exports.shop_add_get = (req, res) => {
    Mall.find()
    .then((malls) => {
        console.log
        res.render('shop/add', {malls});
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.shop_add_post = (req, res) => {
    console.log(req.body);
    let shop = new Shop(req.body);
    shop.save()
    .then(() => {
        console.log(shop);
        res.redirect('/shop/index');
    })
    .catch((err) => {
        console.log(err);
    })
}