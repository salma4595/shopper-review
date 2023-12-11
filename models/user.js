const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
name: String,
googleId:{
    type:String,
    required: true
},
email: String,
userType: String,
},{timestamps: true})

const User = mongoose.model('user', userSchema)

module.exports = User;