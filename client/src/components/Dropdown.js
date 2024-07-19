import React, {useState} from 'react';
import Select from 'react-select';
import {stocks} from '../../../stocksName.js';

export default function Dropdown({saveSubmitStocks}) {

  const [selectedStocks, setSelectedStocks] = useState([]);

  const handleChange = (stocks) => {
    setSelectedStocks(stocks);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveSubmitStocks(selectedStocks);
  }

  return (
    <div>
      <h4>Please Selected Stocks</h4>
      <Select
      options={stocks}
      value={selectedStocks}
      onChange={handleChange}
      isMulti={true}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}