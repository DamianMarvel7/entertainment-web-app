const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  id: Number,
  title: String,
  thumbnail: {
    trending: {
      small: String,
      large: String,
    },
    regular: {
      small: String,
      medium: String,
      large: String,
    },
  },
  year: Number,
  category: String,
  rating: String,
  isBookmarked: Boolean,
  isTrending: Boolean,
});

// const workoutSchema = new Schema({
//   user_id: {
//     type: String,
//     required: true,
//   },
//   id: {
//     type: Number,
//     required: true,
//   },
//   isBookmarked: {
//     type: Boolean,
//     required: true,
//   },
// });

module.exports = mongoose.model("Movie", workoutSchema);
