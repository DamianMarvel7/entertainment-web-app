const Movie = require("../model/movieModel");
const Bookmark = require("../model/bookmarkModel");
const mongoose = require("mongoose");
const movieData = require("../data/data.json");

// get all Movies
const getMovies = async (req, res) => {
  const user_id = req.user._id;

  try {
    const bookmarks = await Bookmark.find({ user_id });
    const movies = await Movie.find({});

    const updatedMovieData = movies.map((movie) => {
      const matchingBookmark = bookmarks.find(
        (bookmark) => bookmark.id === movie.id
      );
      if (matchingBookmark) {
        movie.isBookmarked = matchingBookmark.isBookmarked;
      }
      return movie;
    });

    console.log("Movie bookmarks updated successfully.");
    res.status(200).json(updatedMovieData);
  } catch (error) {
    console.error("Error updating movie bookmarks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createMovie = async (req, res) => {
  const movieData = req.body;
  const newMovie = await Movie.create(movieData);
  console.log(movieData);
  res.status(200).json(newMovie);
};

const getBookmark = async (req, res) => {
  const user_id = req.user._id;

  const bookmark = await Bookmark.find({ user_id });
  res.status(200).json(bookmark);
};

// add bookmark
const createBookmark = async (req, res) => {
  try {
    const { id } = req.body;
    const user_id = req.user._id;

    const existingMovie = await Bookmark.findOne({ user_id, id });

    let updatedMovie;

    if (!existingMovie) {
      updatedMovie = await Bookmark.create({
        user_id,
        id,
        isBookmarked: true,
      });
    } else {
      existingMovie.isBookmarked = !existingMovie.isBookmarked;
      updatedMovie = await existingMovie.save();
    }

    console.log(updatedMovie);

    res.status(200).json({ movie: updatedMovie, user_id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    await Movie.deleteMany({}); // This will delete all documents from the "Movie" collection

    res.status(200).json({ message: "All movies deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting movies" });
  }
};

// update a workout
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user._id;

  const workout = await Movie.findOneAndUpdate(
    { user_id: user_id, "movieData.title": title },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getMovies,
  getBookmark,
  createMovie,
  createBookmark,
  updateMovie,
  deleteMovie,
};
