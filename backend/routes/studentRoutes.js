const express = require("express");

const getAll = require("../controllers/getAll");
const matching = require("../controllers/matching");

const router = express.Router();

router.post("/", matching);

router.get("/all", getAll);

module.exports = router;
