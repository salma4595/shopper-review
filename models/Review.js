const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Shop',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;