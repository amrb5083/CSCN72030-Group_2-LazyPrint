// src/components/FindPrinters.js
import React, { useState, useEffect } from 'react';
import '../styles/FindPrinters.css';

function FindPrinters({ onBackToPrintJob, onGoBackToHome }) {
  const [postalCode, setPostalCode] = useState('');
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    // Fetch data from the Flask API endpoint when the component mounts
    fetch('http://127.0.0.1:5000/api/printers')
      .then(response => response.json())
      .then(printers => setPrinters(printers))
      .catch(error => console.error('Error fetching printer data:', error));
  }, []);

  const handleSearch = () => {
    // You can filter printers based on the postal code if needed
    // For now, just log the selected postal code
    console.log(`Searching for printers near postal code: ${postalCode}`);
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
      <button onClick={handleSearch}>Search</button>
      <ul>
        {printers.map((printer) => (
          <li key={printer.printerID}>
            {`${printer.printerName} - ${printer.printerBrand} - ${printer.printerPrice} - ${printer.printerCode}`}
          </li>
        ))}
      </ul>
      <button onClick={onBackToPrintJob}>Book a Print Job</button>
      <button onClick={() => onGoBackToHome()}>Back to Home</button>
    </div>
  );
}

export default FindPrinters;
