import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('https://webappsstatic.paytm.com/growth-api/currency/rate/rate.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = event => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = event => {
    setToCurrency(event.target.value);
  };

  const handleConvert = () => {
    if (data && amount) {
      const fromRate = data.rates[fromCurrency];
      const toRate = data.rates[toCurrency];
      setResult((amount / fromRate) * toRate);
    }
  };

  return (
    <div>
      {data && (
        <>
          <input type="number" value={amount} onChange={handleAmountChange}  />
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {Object.keys(data.rates).sort().map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {Object.keys(data.rates).sort().map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          TO
          </select>
          <button onClick={handleConvert}>Convert</button>
          {result && <p>{result}</p>}
        </>
      )}
    </div>
  );
}

export default App;