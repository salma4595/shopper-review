//API's Function 
const Shop = require('../models/Shop');
const {Mall} = require("../models/Mall");

// CRUD operations
//HTTP POST- Create - Post the data 
// HTTP GET - Read - Retrives the data
// HTTP PUT - update - update the data
//HTTP Delete/GET/POST - delete- delete the data

exports.mall_index_get= (req, res) =>{
    Mall.find() 
    .then((malls) =>{
        res.render("mall/index",{malls});
    })
    .catch((err) => {
        console.log(err);
    })
}


exports.mall_create_get= (req, res) =>{
    res.render("mall/add");
}


exports.mall_create_post= (req, res) =>{
    console.log(req.body)
    let mall= new Mall(req.body); // depend on controllers


//save author
mall.save()  // depend on constant 
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

exports.mall_update_post= (req,res) =>{
    console.log(req.body.id)
    Mall.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/mall/index");
    })
    .catch((err) => {
        console.log(err);
    })
}
