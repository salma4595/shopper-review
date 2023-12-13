const Shop = require('../models/Shop');
const {Mall} = require('../models/Mall');
const Review = require("../models/Review");
const upload = require('../config/upload');

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

// edit page
exports.shop_edit_get = (req, res) => {
    Shop.findById(req.query.id)
    .then((shop) => {
        res.render("shop/edit", {shop});
    })
    .catch((err) => {
        console.log(err);
    })
}

// edit shop
exports.shop_edit_post = (req, res) => {
    console.log(req.body.id)
    Shop.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/shop/index");
    })
    .catch((err) => {
        console.log(err);
    })
}

// delete a shop
exports.shop_delete_get = (req, res) => {
    console.log(req.query.id)
    Shop.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/shop/index");
    })
    .catch((err) => {
        console.log(err);
    })
}

// get details
exports.shop_detail_get = (req, res) => {
    // find review for the specific shop
    // get the shop from DB
    Shop.findById(req.query.id)
    .populate('mall')
    .then((shop) => {
        Review.find({shop: req.query.id})
        .populate("user")
        .then((reviews) => {
            res.render('shop/detail', {shop, reviews});
        })
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

exports.shop_add_post = async (req, res) => {
    let result = '';
    let resultMulti = [];
    // populate images path into an array
    let multiImages = [];
    req.files.shopImages.forEach((image) => {
        multiImages.push(image.path);
    });
    resultMulti = await upload.upload_multiple(multiImages);
    try {
        result = await upload.upload_single(req.files.thumbnail[0].path);
        resultMulti = await upload.upload_multiple(multiImages);
    }
    catch (err) {
        console.log(err);
    }
    let shop = new Shop(req.body);
    shop.thumbnail = result.url;
    shop.images = resultMulti;
    shop.save()
    .then(() => {
        console.log(shop);
        res.redirect('/shop/index');
    })
    .catch((err) => {
        console.log(err);
    })
}