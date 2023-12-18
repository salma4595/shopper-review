const Shop = require('../models/Shop');

exports.search_index_get = (req, res) => {
    Shop.find()
    .populate('mall')
    .then((shops) => {
        res.render('search/index', {shops});
    })
}

exports.search_index_post = (req, res) => {
    let searchTerm = req.body.searchTerm;
    const query = { "name": { "$regex": searchTerm, "$options": "i" } };
    Shop.find(query)
    .populate('mall')
    .then((shops) => {
        res.render('search/index', {shops});
    });
}