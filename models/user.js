const mongoose = require('mongoose')
const Schema = mongoose.Schema

  const userSchema = new Schema({
  name: String,
  googleId:{
      type:String,
      required: true
  },
  avatar: {
    type: String,
    default: "/images/blank-profile.png"
  },
  email: String,
  isAdmin:{
    type:Boolean,
    default: false,
  },
  userType: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
  },{timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User;