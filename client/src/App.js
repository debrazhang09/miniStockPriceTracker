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



  useEffect( () => {
    if (!fetchDataTrigger) return;

    const fetchData = async () => {


      setLoading(true);

      try {

        const response = await axios.post(`/price`, finalStocks);
        setSelectedStocksPrice(response.data); // Set the fetched data

      } catch (err) {
        setError(err); // Set the error if something goes wrong
      } finally {
        setLoading(false); // Set loading to false once fetching is complete
        setFetchDataTrigger(false);
      }
    };
     fetchData();
  }, [fetchDataTrigger])

  const saveSubmitStocks = (stocks) => {
    setFetchDataTrigger(true);
    setFinalStocks(stocks);
  }



  return (
    <>
      <h1>Top 100 Stocks Current Price</h1>
      <Dropdown saveSubmitStocks={saveSubmitStocks}/>
      <Lists stocks={selectedStocksPrice}/>

    </>
  );
}


