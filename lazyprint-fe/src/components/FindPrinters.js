// src/components/FindPrinters.js
import React, { useState } from 'react';
import '../styles/FindPrinters.css';

function FindPrinters({ onBackToPrintJob, onGoBackToHome }) {
  const [postalCode, setPostalCode] = useState('');
  const mockPrinters = [
    { name: 'Printer1', brand: 'HP', location: 'Location1', price: '$0.10/pg', code: 'QNDA' },
    // Add more mock printers here
  ];

  const handleSearch = () => {
    // Mock API call can be placed here
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
        {mockPrinters.map((printer, index) => (
          <li key={index}>
            {`${printer.name} - ${printer.brand} - ${printer.location} - ${printer.price} - ${printer.code}`}
          </li>
        ))}
      </ul>
      <button onClick={onBackToPrintJob}>Book a Print Job</button>
      <button onClick={() => onGoBackToHome()}>Back to Home</button>
    </div>
  );
}

export default FindPrinters;
