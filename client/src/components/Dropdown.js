import React from 'react';

export default function Dropdown({stocks, onStockChange}) {


  const handleChange = (event) => {
    onStockChange(event.target.value);
  };
  return (
    <div>
      <label htmlFor="dropdown">Select one stock:</label>
      <select id="dropdown" onChange={handleChange}>
        <option value="">--Select one stock--</option>
        {stocks.map(stock => (
          <option key={stock} value={stock}>
            {stock}
          </option>
        ))}
      </select>
    </div>
  );
}