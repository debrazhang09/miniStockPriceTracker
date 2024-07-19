import React from 'react';

export default function Lists({stocks}) {
  if (!stocks || stocks.length === 0) return <div>Waiting for stocks.</div>
  const headers = Object.keys(stocks[0])
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {stocks.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>


  );
}
