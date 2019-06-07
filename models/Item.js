const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  pinId: {
    type: Schema.Types.ObjectId,
    ref: 'pins'
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'boards'
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Item = mongoose.model('items', ItemSchema);