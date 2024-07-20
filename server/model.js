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

const saveStocksPrice = async(stocks) => {
  //stocks = [{name : 'amazon', price : 200}];
  try {
    const operations = stocks.map((stock) => ({'updateOne' : { 'filter' : {'name' : stock.name} , 'update' : {'$set' : {'price' : stock.price}}}}));
    await Stock.bulkWrite(operations);
    console.log('Update stocks price successfully');
  } catch (error) {
    console.error('Error updating stocks price:', error);
  }

}
module.exports = {getPredfinedStocks, saveStocksPrice};