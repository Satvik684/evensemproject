const wishlist = require("../models/wishlistModel")

const deleteWishlistItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await wishlist.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Scholarship not found in wishlist' });
    }

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}

module.exports = deleteWishlistItem;