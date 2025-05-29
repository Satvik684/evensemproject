const mongoose = require("mongoose");

const wishlistSchema =  new mongoose.Schema({
  scholarship_name: {
    type: String,
    required: true,
  },
  eligible_degrees: {
    type: String,
    required: true,
  },
  funding_type: {
    type: String,
    required: true,
  },
  eligible_courses: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },

  sentiment_score: {
    type: Number,
    required: true,
  },

  student_friendly_rating: {
    type: Number,
    required: true,
  },
});

const wishlist = mongoose.model("wishlist", wishlistSchema);

module.exports = wishlist;