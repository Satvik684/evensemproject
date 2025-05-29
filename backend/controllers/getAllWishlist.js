const wishlist = require("../models/wishlistModel")

const getAllWishlist = async (req,res)=>{
    try {

    

    const items = await wishlist.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving wishlist', error: err });
  }

}

module.exports = getAllWishlist;