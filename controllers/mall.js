//API's Function 

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
    Mall.findById(req.query.id)
    .then((mall) => {
        res.render("mall/detail", {mall})
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.mall_edit_get= (req,res) =>{

}

exports.mall_update_post= (req,res) =>{
    
}
