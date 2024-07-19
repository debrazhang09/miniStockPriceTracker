const mongoose = require('mongoose');
const Stock = require('./models/Stock');
const {preDefinedStocks} = require('../yammyData.js');


const connection  = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/miniStock');
    console.log('Connected to DB!');
  } catch(err) {
    console.error(error.message);
    process.exit(-1);
  }
};



const saveStockData = async () => {
  try {
    await connection();

    const stockData = Object.keys(preDefinedStocks).map((stockName, index) => {
      return {
        'id' : index + 1,
        'name' : stockName,
        'price' : preDefinedStocks[stockName],
        'date' : new Date()
        }
    });
    // console.log(Stock, stockData)
    await Stock.insertMany(stockData);
    console.log('Stock data saved successfully');
  } catch (error) {
    console.error('Error saving stock data:', error);
  }

  // Close the connection once the data is saved
  // mongoose.connection.close();
};
saveStockData();
