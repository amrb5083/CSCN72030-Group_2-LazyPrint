// ConfirmationComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { confirmationContainerStyle, sectionHeadingStyle, confirmButtonStyle } from './styles';

const ConfirmationComponent = ({ selectedPrintJob, selectedPrinter }) => {
  const handleConfirm = () => {
    // Perform confirmation logic (e.g., send request to a server)
    // For simplicity, just log the selected print job and printer
    console.log('Print Job:', selectedPrintJob);
    console.log('Selected Printer:', selectedPrinter);
  };

  return (
    <div style={confirmationContainerStyle}>
      <p style={sectionHeadingStyle}>Print Job Details</p>
      <p>File: {selectedPrintJob.file}</p>
      <p>Number of Pages: {selectedPrintJob.pages}</p>

      <p style={sectionHeadingStyle}>Selected Printer</p>
      <p>Name: {selectedPrinter.name}</p>
      <p>Distance: {selectedPrinter.distance}</p>
      <p>Time: {selectedPrinter.time}</p>

      <button onClick={handleConfirm} style={confirmButtonStyle}>
        Confirm Booking
      </button>
    </div>
  );
};

// Add prop validation
ConfirmationComponent.propTypes = {
  selectedPrintJob: PropTypes.shape({
    file: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
  }).isRequired,
  selectedPrinter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
};

export default ConfirmationComponent;
