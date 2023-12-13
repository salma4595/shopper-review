//API's Function 
const Shop = require('../models/Shop');
const {Mall} = require("../models/Mall");
const Review = require("../models/Review");
const User = require("../models/user");
const upload = require('../config/upload');

// CRUD operations
//HTTP POST- Create - Post the data 
// HTTP GET - Read - Retrives the data
// HTTP PUT - update - update the data
//HTTP Delete/GET/POST - delete- delete the data

exports.mall_index_get= (req, res) =>{
    Mall.find()
    .then((malls) =>{
        res.render("mall/index",{malls, user: req.user });
    })
    .catch((err) => {
        console.log(err);
    })
}


exports.mall_create_get = (req, res) => {
    // ensureLoggedIn(req, res, () => {
    //   if (req.user === 'admin') {
        res.render("mall/add");
    //   } else {
    //     //res.redirect("/mall/index");
    //   }
    // });
  };


exports.mall_create_post = async (req, res) => {
    let result = '';
    let resultMulti = [];
    // populate images path into an array
    let multiImages = [];
    req.files.mallImages.forEach((image) => {
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
    console.log(req.body)
    let mall= new Mall(req.body); 
    mall.thumbnail = result.url;
    mall.images = resultMulti;
    mall.save()
    .then(() => {
        res.redirect("/mall/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
    })
    }


exports.mall_delete_get= (req,res) =>{
    console.log(req.query.id)
    Mall.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/mall/index");
    })
    .catch((err) => {
        console.log(err);
    })
}



exports.mall_show_get= (req,res) =>{
    console.log(req.query.id);
    let shops = '';
    // get the shops where are located inside the mall
    Mall.findById(req.query.id)
    .then((mall) => {
        Shop.find({mall: req.query.id})
        .then((shops) => {
            res.render("mall/detail", {mall, shops})
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.mall_edit_get= (req,res) =>{
    Mall.findById(req.query.id)
    .then((mall) => {
        res.render("mall/edit", {mall});
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.mall_update_post = async (req,res) =>{
    let newThumbnail = await Mall.findById(req.body.id).thumbnail;
    if(req.files.thumbnail) {
        result = await upload.upload_single(req.files.thumbnail[0].path);
        newThumbnail = result.url;
    }
    if(req.files.mallImages) {
        let mall = await Mall.findById(req.body.id)
        // get the url of the req files only
        let newImages = [];
        req.files.mallImages.forEach((image) => {
            newImages.push(image.path);
        });

        // upload images to the cloud
        let result = await upload.upload_multiple(newImages);

        // add the result to current array
        mall.images = mall.images.concat(result);
        req.body.images = mall.images;
    }
    req.body.thumbnail = newThumbnail

    Mall.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/mall/index");
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.mall_image_delete_get = (req, res) => {
    // /mall/image/delete?index=xxx&shop=xxxx
    Mall.findById(req.query.mall)
    .then((mall) => {
        mall.images.splice(req.query.index, 1);
        mall.save()
        .then(() => {
            res.redirect(`/mall/edit?id=${req.query.mall}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
}