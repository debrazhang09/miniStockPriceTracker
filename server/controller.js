const {getPredfinedStocks} = require('./model.js');


const getPredfinedStocksFn = async(req, res) => {
    let result = await getPredfinedStocks();
    res.send(result);
}

module.exports = {getPredfinedStocksFn};