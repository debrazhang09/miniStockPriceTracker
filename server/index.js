const {getPredfinedStocksFn, saveStocksPriceFn} = require('./controller.js');
const {saveStocksPrice} = require('./model.js')


const path = require('path');
const express = require('express');
const morgan = require('morgan');


const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/predefinedStocks', getPredfinedStocksFn);

app.post('/price', saveStocksPriceFn);


const port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});