import React ,{useState} from 'react';
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

  const handleStockChange = (value) => {
    setSelectedStock(value);
  };


  return (
    <>
      <h1>Top 100 Stocks Current Price</h1>
      <Dropdown stocks={preDefinedStock} onStockChange={handleStockChange}/>
      <p>Selected Stock: {selectedStock}</p>
      <button onClick={() => {setSelectedStockPrice(0)}}>
        Get Current Price {selectedStockPrice}
      </button>
    </>
  );
}


