const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  userId: String // Simplified; no auth yet
});

module.exports = mongoose.model('Event', eventSchema);
