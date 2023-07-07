const mongoose = require("mongoose");

const movieFeedbackSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
  },
  movieTitle: {
    type: String,
    required: true,
  },
  movieImage: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  movieFeedback: {
    type: String,
    required: true,
  },
});

const MovieFeedback = mongoose.model("MovieFeedback", movieFeedbackSchema);

module.exports = MovieFeedback;
