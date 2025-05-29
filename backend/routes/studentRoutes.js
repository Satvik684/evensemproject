const express = require("express");

const getAll = require("../controllers/getAll");

const matching = require("../controllers/matching");

const addToWishlist = require("../controllers/addToWishlist");

const getAllWishlist = require("../controllers/getAllWishlist");

const deleteWishlistItem = require("../controllers/deleteWishlistItem")

const router = express.Router();

router.post("/", matching);

router.get("/all", getAll);

router.post("/add-to-wishlist",addToWishlist);

router.get("/wishlist",getAllWishlist);

router.delete("/delete/:id",deleteWishlistItem);

module.exports = router;
