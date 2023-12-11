///API's
///requiring models
const { User } = require("../models/user");

///index 
exports.index_get = (req,res) => {
    res.render('home/index',{message: "Welcome to Shopper Review!"})
}

