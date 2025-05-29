const express = require('express');

const router = express.Router();

const {singupUser,loginUser} = require("../controllers/userController");

//login route
router.post('/login',loginUser);

//signup route
router.post('/signup',singupUser);

module.exports = router;