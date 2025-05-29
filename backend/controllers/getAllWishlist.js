const wishlist = require("../models/wishlistModel")

const getAllWishlist = async (req,res)=>{
    try {
      const user_id = req.user._id;
    

    const items = await wishlist.find({user_id});
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving wishlist', error: err });
  }

}

module.exports = getAllWishlist;