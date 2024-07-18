import React , {useState, useEffect} from 'react';
import axios from 'axios';

import Dropdown from './components/Dropdown.js';

export default function App() {
  const preDefinedStock = [
    "AAPL", "MSFT", "GOOGL", "AMZN", "META", "BRK.B", "TSLA", "NVDA", "JPM", "JNJ",
    "V", "UNH", "HD", "PG", "PYPL", "DIS", "MA", "VZ", "ADBE", "NFLX",
    "KO", "MRK", "CMCSA", "PEP", "XOM", "PFE", "CSCO", "ABT", "T", "INTC",
    "CRM", "AVGO", "ACN", "ABBV", "QCOM", "NKE", "TXN", "MDT", "COST", "LLY",
    "NEE", "WMT", "AMGN", "LOW", "IBM", "DHR", "HON", "BA", "MS", "GS",
    "CVX", "MCD", "UNP", "LIN", "SBUX", "LMT", "BLK", "ORCL", "C", "ISRG",
    "SPGI", "MMM", "MO", "CAT", "GE", "TGT", "ADP", "AMD", "ZTS", "NOW",
    "ADI", "PLD", "AXP", "USB", "SYK", "GILD", "ICE", "MDLZ", "REGN", "CCI",
    "APD", "CI", "ECL", "BKNG", "EL", "TMO", "NSC", "FIS", "MU", "DUK",
    "TFC", "SO", "ITW", "SCHW", "PNC", "HUM", "BDX", "WM", "FDX", "ROP"
  ]

  const [selectedStock, setSelectedStock] = useState('');

  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null);

  const handleStockChange = (value) => {
    setSelectedStock(value);
  };

  const handleButtonClick = (stock) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${stock}/price`);
        setSelectedStockPrice(response.data); // Set the fetched data

      } catch (err) {
        setError(err); // Set the error if something goes wrong
      } finally {
        setLoading(false); // Set loading to false once fetching is complete
      }
    };

    fetchData();
  }



  return (
    <>
      <h1>Top 100 Stocks Current Price</h1>
      <Dropdown stocks={preDefinedStock} onStockChange={handleStockChange}/>
      <p>Selected Stock: {selectedStock}</p>
      <button onClick={() => {handleButtonClick(selectedStock)}}>
        Get Current Price
      </button>
      <p>{selectedStockPrice}</p>
    </>
  );
}


