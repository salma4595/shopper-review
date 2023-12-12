///require model
const User = require('../models/user')
const Review = require("../models/Review");

////start of crud ... this is create get
exports.user_create_get = (req,res) => {
    res.render("user/add");
}

///post
exports.user_create_post = (req, res) => {
    console.log(req.body);
    ///
    let user = new User (req.body)
    user.save()
.then(() => {
    res.redirect("/user/index");
})

.catch((err) => {
    console.log(err);
    res.send('no , again')
})}





///to find user
exports.user_index_get = (req,res) => {
    User.find()
    
    .then((users) => {
        console.log(users)
        res.render("user/index", {users})
    })
    .catch((err) => {
        console.log(err);
    })
}

////so this shows ejs

exports.user_detail_get = (req,res) => {
    console.log(req.query.id);
    User.findById(req.query.id).populate('name')
    .then((user) => {
        console.log(user)
        res.render("user/detail", {user})
    })
    .catch((err) => {
        console.log(err);
    })
}


///delete user
exports.user_delete_get = (req,res) => {
    console.log(req.query.id);
    //find doc and delete
    User.findByIdAndDelete(req.query.id)
   .then(()=> {
    ///after deleting redirect to index page
    res.redirect("/user/index");
})
    .catch((err) => {
        console.log(err);
    })
}

///editing 
exports.user_edit_get = (req, res) => {
    User.findById(req.query.id)
    .then((user) => {
        res.render("user/edit", {user})
    })

    .catch(err => {
        console.log(err)
    })
}
////update using post
exports.user_edit_post = (req,res) => {
    console.log(req.body.id)
   
    User.findByIdAndUpdate(req.body.id, req.body)
    .then(() =>{
        res.redirect("/user/index")
    } )

    .catch(err => {
        console.log(err)
    })
}
