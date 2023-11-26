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
    const fetchData = async () => {
      try {
        // Make a request to your Flask API endpoint
        const response = await fetch('/api/get_printer_list');

        // Check if the response is successful (status code 200)
        if (response.ok) {
          try {
            // Attempt to parse the response as JSON
            const data = await response.json();
            console.log('Fetched data:', data);

            const printerData = data.printers || [];

            // Update the state with the received printer data
            setPrinters(printerData);
          } catch (jsonError) {
            // Handle JSON parsing error
            console.error('Error parsing JSON:', jsonError);
          }
        } else {
          // Handle error cases if needed
          console.error('Failed to fetch printer data:', response.statusText);
        }
      } catch (error) {
        // Handle fetch errors
        console.error('Error fetching printer data:', error);
      }
    };

    // Call the fetchData function to get data from the Flask API
    fetchData();
  }, []);  // Empty dependency array to run the effect only once

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

export default PrinterListComponent;
