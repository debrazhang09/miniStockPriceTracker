const {preDefinedStocks} = require('../yammyData.js');
const {getPredfinedStocksFn} = require('./controller.js')


const path = require('path');
const express = require('express');
const morgan = require('morgan');


const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/predefinedStocks', getPredfinedStocksFn);

app.post('/price', (req, res) => {

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
  res.send(mockedData);
});


const port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});