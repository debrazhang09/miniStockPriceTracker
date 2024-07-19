const mongoose = require('mongoose');
const Stock = require('../db/StockSchema.js');
const {preDefinedStocks} = require('../yammyData.js');


const saveStockData = async () => {
  try {
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
  mongoose.connection.close();
};
saveStockData();
