const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema( {
  id: {type: Number, unique: true, required: true},
  name: String,
  price: Number,
  date: Date
});
const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;