// PrintJobComponent.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  printJobContainerStyle,
  fileInputStyle,
  inputFieldStyle,
  createJobButtonStyle,
  successMessageStyle,
} from './styles';

const PrintJobComponent = ({ onSelectPrintJob }) => {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState(1);
  const [printJobCreated, setPrintJobCreated] = useState(false);

  const handlePrintJob = () => {
    // Perform print job creation logic (e.g., send request to a server)
    // For simplicity, check if a file is selected before setting printJobCreated to true
    if (file) {
      setPrintJobCreated(true);
      // Call the onSelectPrintJob function to pass the print job data to the parent component
      onSelectPrintJob({ file, pages });
    } else {
      alert('Please select a file for printing');
    }
  };

  return (
    <div style={printJobContainerStyle}>
      {printJobCreated ? (
        <p style={successMessageStyle}>Print job created successfully!</p>
      ) : (
        <>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} style={fileInputStyle} />
          <input
            type="number"
            placeholder="Number of pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            style={inputFieldStyle}
          />
          <button onClick={handlePrintJob} style={createJobButtonStyle}>
            Create Print Job
          </button>
        </>
      )}
    </div>
  );
};

// Add prop validation
PrintJobComponent.propTypes = {
  onSelectPrintJob: PropTypes.func.isRequired,
};


export default PrintJobComponent;
