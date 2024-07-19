import React , {useState, useEffect} from 'react';
import axios from 'axios';



import Dropdown from './components/Dropdown.js';
import Lists from './components/Lists.js';

export default function App() {
  const [finalStocks, setFinalStocks] = useState([]);

  const [selectedStocksPrice, setSelectedStocksPrice] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null);
  const [fetchDataTrigger, setFetchDataTrigger] = useState(false);
  const [fetchDataEnabler, setFetchDataEnabler] = useState(false);


  const fetchData = async () => {
    setLoading(true);

    try {

      const response = await axios.post(`/price`, finalStocks);
      setSelectedStocksPrice(response.data); // Set the fetched data

    } catch (err) {
      setError(err); // Set the error if something goes wrong
    } finally {
      setLoading(false); // Set loading to false once fetching is complete

    }
  };

  useEffect( () => {
    if (!fetchDataEnabler) return;

    fetchData();

    if (!finalStocks.length) return;

    // 1 second for testing
    const intervalId = setInterval(() => fetchData(), 1000 * 1) ;

    return () => clearInterval(intervalId);


  }, [fetchDataTrigger])

  const saveSubmitStocks = (stocks) => {
    setFinalStocks(stocks);
    setFetchDataEnabler(true);
    setFetchDataTrigger(prev => !prev);
  }



  return (
    <>
      <h1>Top 100 Stocks Current Price</h1>
      <Dropdown saveSubmitStocks={saveSubmitStocks}/>
      <Lists stocks={selectedStocksPrice}/>

    </>
  );
}


