const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockSchema = new Schema({
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
});

module.exports = mongoose.model('Stock', stockSchema);