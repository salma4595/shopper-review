///API's

exports.index_get = (req,res) => {
    res.render('home/index',{message: "Welcome to Shopper Review!"})
}