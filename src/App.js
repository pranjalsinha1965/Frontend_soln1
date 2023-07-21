import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [numbers, setNumbers] = useState([]);

  const fetchData = async () => {
    try {
      const url1 = 'http://20.244.56.144/numbers/primes';
      const url2 = 'http://20.244.56.144/numbers/fibo';
      const url3 = 'http://20.244.56.144/numbers/odd';
      const response = await axios.get(`http://localhost:8008/numbers?url=${url1}&url=${url2}&url=${url3}`);
      setNumbers(response.data.numbers);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchData}>Fetch Numbers</button>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
