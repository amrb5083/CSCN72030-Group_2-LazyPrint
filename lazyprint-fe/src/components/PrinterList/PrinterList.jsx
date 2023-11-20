// PrinterListComponent.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  printerListContainerStyle,
  sortDropdownStyle,
  printerListStyle,
  printerItemStyle,
} from './styles';

const PrinterListComponent = () => {
  const [printers, setPrinters] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    // Fetch printers from the server or any data source
    // For simplicity, a static list is used here
    const mockPrinters = [
      { id: 1, name: 'Printer A', distance: 5, time: 10 },
      { id: 2, name: 'Printer B', distance: 8, time: 15 },
      // Add more printer data as needed
    ];

    setPrinters(mockPrinters);
  }, []);

  const handleSort = (option) => {
    // Perform sorting logic based on the selected option
    let sortedPrinters = [...printers];

    switch (option) {
      case 'distance':
        sortedPrinters.sort((a, b) => a.distance - b.distance);
        break;
      case 'time':
        sortedPrinters.sort((a, b) => a.time - b.time);
        break;
      case 'optimized':
        // Implement your optimized sorting logic here
        break;
      case 'recommended':
        // Implement your recommended sorting logic here
        break;
      default:
        // Default to original order
        break;
    }

    setPrinters(sortedPrinters);
    setSortOption(option);
  };

  return (
    <div style={printerListContainerStyle}>
      <select onChange={(e) => handleSort(e.target.value)} style={sortDropdownStyle}>
        <option value="">Sort by</option>
        <option value="distance">Nearest Distance</option>
        <option value="time">Shortest Time</option>
        <option value="optimized">Distance-Time Optimized</option>
        <option value="recommended">Recommended</option>
      </select>

      <ul style={printerListStyle}>
        {printers.map((printer) => (
          <li key={printer.id} style={printerItemStyle}>
            {printer.name} - Distance: {printer.distance}, Time: {printer.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add prop validation
PrinterListComponent.propTypes = {
  printers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
      time: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PrinterListComponent;
