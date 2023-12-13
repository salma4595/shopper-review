///API's


///index 
exports.index_get = (req,res) => {
    res.render('home/index',{message: ""})
}