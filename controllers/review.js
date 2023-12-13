//API's Function 
const Shop = require('../models/Shop');
const {Mall} = require("../models/Mall");
const Review = require("../models/Review");
const User = require("../models/user");
// CRUD operations
//HTTP POST- Create - Post the data 
// HTTP GET - Read - Retrives the data
// HTTP PUT - update - update the data
//HTTP Delete/GET/POST - delete- delete the data

exports.review_index_get= (req, res) =>{
    console.log('inside review');
    Review.find().populate('shop')
    .populate('user') // populate the 'user' field
    .then((reviews) =>{
        Shop.find()
        .then((shops) => {

        })
        res.render("review/index",{reviews});
    })
    .catch((err) => {
        console.log(err);
    })
}


exports.review_create_get= (req, res) =>{
    Shop.find()
    .then((shops) => {
        console.log(shops);
        res.render('review/add', {shops});
    })
    .catch((err) => {
        console.log(err);
    })
}

async function calculateAvgReviews(shopId) {
    // get number of reviews in the store
    let numberOfReviews = 0;
    let totalStars = 0;
    let avgReview = 0;
    await Review.find({shop: shopId})
    .then((reviews) => {
        numberOfReviews = reviews.length;
        // get the total number of stars for the reviews
        for(const review of reviews) {
            totalStars += review.rating;
        }
        avgReview = Math.floor(totalStars / numberOfReviews);
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
})
return avgReview;

}


exports.review_create_post = (req, res) =>{
    console.log(req.body)
    let review = new Review(req.body); // depend on controllers
    review.save()  // depend on constant 
    .then(async () => {
        // get the current shop and update the average review
        let avgRating = await calculateAvgReviews(review.shop)
            Shop.findByIdAndUpdate(review.shop, {rating: avgRating})
            .then((shop) => {
                res.redirect("/review/index");
        })
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
})
}


exports.review_delete_get= (req,res) =>{
    console.log(req.query.id)
    Review.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/review/index");
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.review_show_get= (req,res) =>{
    console.log(req.query.id);
    let shops = '';
    // get the shops where are located inside the review
    Review.findById(req.query.id).populate('shop')
    .populate('user') // populate the 'user' field
    .then((review) => {
        Shop.find({review: req.query.id})
        .then((shops) => {
            res.render("review/detail", {review, shops})
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.review_edit_get= (req,res) =>{
    Review.findById(req.query.id).populate('shop')
    .populate('user')
    .then((review) => {
        res.render("review/edit", {review});
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.review_update_post= (req,res) =>{
    console.log(req.body.id)
    Review.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/review/index");
    })
    .catch((err) => {
        console.log(err);
    })
}
