const {preDefinedStocks} = require('../yammyData.js');
const path = require('path');
const express = require('express');
const morgan = require('morgan');


const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*/price', (req, res) => {

  // console.log(req.url)
  let stockName = req.url.split('/')[1];

  //mocked API
  let sign = Math.random();
  if (sign < 0.5) {
    sign = - sign;
  }

  let mockedData = {};

  preDefinedStocks.forEach((stock) => {

  mockedData[stock.Ticker] = Number(stock['Current Price'] * (1 + sign)).toFixed(3);

  })

  res.send(mockedData[stockName]);





});


const port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});