// src/components/FindPrinters.js
import React, { useState, useEffect } from 'react';
import '../styles/FindPrinters.css';

function FindPrinters({ onNavigate }) {
  const [postalCode, setPostalCode] = useState('');
  const [printers, setPrinters] = useState([]);
  const [sortingOption, setSortingOption] = useState('');

  // Fetch default printer data
  useEffect(() => {
    fetch('http://127.0.0.1:3003/api/printers')
      .then(response => response.json())
      .then(printers => setPrinters(printers))
      .catch(error => console.error('Error fetching printer data:', error));
  }, []);
  
  // Fetch sorted printer data based on the selected sorting option
  const handleSort = () => {
    if (sortingOption) {
      fetch('http://127.0.0.1:3003/api/sort_printers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postal_code: postalCode,
          sorting_method: sortingOption,
        }),
      })
        .then(response => response.json())
        .then(sortedPrinters => setPrinters(sortedPrinters.sorted_printers))
        .catch(error => console.error('Error fetching sorted printer data:', error));
    }
  };

  return (
    <div className="find-printers">
      <h2>Find Nearby Printers</h2>
      <input
        type="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        placeholder="Postal Code"
      />
      <select onChange={(e) => setSortingOption(e.target.value)}>
        <option value="">Sort by</option>
        <option value="distance">Distance-based</option>
        <option value="queue">Pending Queues</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="time">Time-based</option>
        <option value="distance_time">Distance-Time Optimized</option>
      </select>
      <button onClick={handleSort}>Sort</button>
      <ul>
  {printers && printers.length > 0 ? (
    printers.map((printer) => (
      <li key={printer.id}>
        {`${printer.name} - ${printer.brand} - ${printer.price} - ${printer.code}`}
      </li>
    ))
  ) : (
    <li>No printers available.</li>
  )}
</ul>

      <button onClick={() => onNavigate('bookPrintJob')}>Book a Print Job</button>
      <button onClick={() => onNavigate('home')}>Back to Home</button>
    </div>
  );
}


export default FindPrinters;