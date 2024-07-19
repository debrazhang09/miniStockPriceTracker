const Stock = require('../db/StockSchema');

const getPredfinedStocks = async() => {
  try {
    let allStocks = await Stock.find({});
    console.log("get predefined stocks successfully!");
    let stocks = allStocks.map((stock) => ({'value' : stock.name, 'label' :stock.name}));
    return stocks;
  } catch (error) {
    console.error('Error fetching predefined stocks data:', error);
  }

}

// const saveStocksPrice = async(stocks) => {
//   try {
//     await connection();

//     const stockData = Object.keys(preDefinedStocks).map((stockName, index) => {
//       return {
//         'id' : index + 1,
//         'name' : stockName,
//         'price' : preDefinedStocks[stockName],
//         'date' : new Date()
//         }
//     });
//     // console.log(Stock, stockData)
//     await Stock.insertMany(stockData);
//     console.log('Stock data saved successfully');
//   } catch (error) {
//     console.error('Error saving stock data:', error);
//   }

// }
module.exports = {getPredfinedStocks};