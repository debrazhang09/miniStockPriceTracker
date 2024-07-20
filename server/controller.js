//preDefinedStocks is an object of stocks base use to mock price change
const {preDefinedStocks} = require('../yammyData.js');

const {getPredfinedStocks, saveStocksPrice} = require('./model.js');


const getPredfinedStocksFn = async(req, res) => {
    let result = await getPredfinedStocks();
    res.send(result);
}

const saveStocksPriceFn = async(req, res) => {

  const data = req.body;

  //mocked API : only selected Stocks Price would be change
  let sign = Math.random();
  if (sign < 0.5) {
    sign = - sign;
  }

  let mockedData = [];

  data.forEach((stock) => {
    let temp = {}
    temp.name = stock.value;
    temp.price = Number(preDefinedStocks[stock.value] * (1 + sign)).toFixed(3);
    mockedData.push(temp);

  })

  //update db
  await saveStocksPrice(mockedData);

  //send back to client
  res.send(mockedData);
}

module.exports = {getPredfinedStocksFn, saveStocksPriceFn};