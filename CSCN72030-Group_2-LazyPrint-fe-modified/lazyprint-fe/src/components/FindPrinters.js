// src/components/FindPrinters.js
import React, { useState, useEffect } from 'react';
import '../styles/FindPrinters.css';

function FindPrinters({ onNavigate }) {
  const [postalCode, setPostalCode] = useState('');
  const [printers, setPrinters] = useState([]);
  const [sortingOption, setSortingOption] = useState(''); // State to track sorting option

  useEffect(() => {
    // Fetch data from the Flask API endpoint when the component mounts
    fetch('http://127.0.0.1:5000/api/printers')
      .then(response => response.json())
      .then(printers => setPrinters(printers))
      .catch(error => console.error('Error fetching printer data:', error));
  }, []);

  // Function to handle sorting based on the selected option
  const handleSort = () => {
    let sortedPrinters = [...printers];

    switch (sortingOption) {
      case 'time-based':
        // Implement time-based sorting logic here
        sortedPrinters.sort((a, b) => a.timeBasedValue - b.timeBasedValue);
        break;
      case 'distance-based':
        // Implement distance-based sorting logic here
        sortedPrinters.sort((a, b) => a.distanceBasedValue - b.distanceBasedValue);
        break;
      case 'optimal':
        // Implement optimal sorting logic here
        // You may consider a combination of time and distance
        break;
      case 'pending-queues':
        // Implement sorting by pending queues logic here
        sortedPrinters.sort((a, b) => a.pendingQueues - b.pendingQueues);
        break;
      default:
        // No sorting option selected
    }

    // Update the printer list with the sorted data
    setPrinters(sortedPrinters);
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
      {/* Dropdown menu for sorting options */}
      <select onChange={(e) => setSortingOption(e.target.value)}>
        <option value="">Sort by</option>
        <option value="time-based">Time-based</option>
        <option value="distance-based">Distance-based</option>
        <option value="optimal">Most Optimal</option>
        <option value="pending-queues">Pending Queues</option>
      </select>
      <button onClick={handleSort}>Sort</button>
      <ul>
        {printers.map((printer) => (
          <li key={printer.printerID}>
            {`${printer.printerName} - ${printer.printerBrand} - ${printer.printerPrice} - ${printer.printerCode}`}
          </li>
        ))}
      </ul>
      <button onClick={() => onNavigate('bookPrintJob')}>Book a Print Job</button>
      <button onClick={() => onNavigate('home')}>Back to Home</button>
    </div>
  );
}

export default FindPrinters;
