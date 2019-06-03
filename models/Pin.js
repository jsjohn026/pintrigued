const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  board: {
    type: Schema.Types.ObjectId,
    ref: 'boards'
  },
  title: {
    type: String,
    required: true
  },
  description: {
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