//API's Function 

const {Mall} = require("../models/Mall");

// CRUD operations
//HTTP POST- Create - Post the data 
// HTTP GET - Read - Retrives the data
// HTTP PUT - update - update the data
//HTTP Delete/GET/POST - delete- delete the data

exports.mall_index_get= (req, res) =>{
    Mall.find()
    .then(() =>{
        res.render("mall/index");
    })
    .catch((err) => {
        console.log(err);
    })
}