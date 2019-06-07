const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  linkUrl: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Pin = mongoose.model('pins', PinSchema);