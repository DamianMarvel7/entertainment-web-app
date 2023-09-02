const express = require("express");
const {
  getMovies,
  getBookmark,
  createMovie,
  createBookmark,
  updateMovie,
  deleteMovie,
} = require("../controller/movieController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth
router.use(requireAuth);

// Get all movies
router.get("/", getMovies);

router.get("/bookmark", getBookmark);

// delete
router.delete("/", deleteMovie);

router.delete("/bookmark", deleteMovie);

// Post a new workout
router.post("/", createMovie);

router.post("/bookmark", createBookmark);

// Update a workout
router.patch("/:id", updateMovie);

module.exports = router;
