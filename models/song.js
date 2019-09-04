const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  songTitle: String,
  artist: String,
  albumTitle: String,
  lyrics: String,
});

module.exports = mongoose.model('song', songSchema);