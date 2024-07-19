const mongoose = require('mongoose');


const connection  = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/miniStock');
    console.log('Connected to DB!');
  } catch(err) {
    console.error(error.message);
    process.exit(-1);
  }
};

const stockSchema = new mongoose.Schema( {
  id: {type: Number, unique: true, required: true},
  name: String,
  price: Number,
  date: Date
});

connection();
const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;