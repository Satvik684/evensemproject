const wishlist = require("../models/wishlistModel");

const addToWishlist = async (req, res) => {
  try {
    const addObj = req.body;
    addObj.user_id = req.user._id;
    const {scholarship_name} = req.body;
    const existing = await wishlist.findOne({ scholarship_name, user_id: req.user._id });

    if (existing) {
      return res.status(409).json({ message: "Item already in wishlist" });
    }

    
    const newObj = await wishlist.create(addObj);
    res.status(200).json({ message: "Added to wishlisr", newObj });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = addToWishlist;
