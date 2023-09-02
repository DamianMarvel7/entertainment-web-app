const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  isBookmarked: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Bookmark", workoutSchema);
