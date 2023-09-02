const express = require("express");
const User = require("../model/userModel");

const router = express.Router();

// controller functions
const { signupUser, loginUser } = require("../controller/userController");

// login route
const getMovies = async (req, res) => {
  const movies = await User.find({});

  res.status(200).json(movies);
};

router.get("/login-movie", getMovies);
router.post("/login-movie", loginUser);

// signup route

router.post("/signup-movie", signupUser);

module.exports = router;
