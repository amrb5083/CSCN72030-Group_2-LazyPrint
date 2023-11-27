// src/components/BookPrintJob.js
import React, { useState } from 'react';
import '../styles/BookPrintJob.css';

function BookPrintJob({ onProceedToPayment, onGoBackToHome }) {
  const [printerCode, setPrinterCode] = useState('');
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Mock API call can be placed here
    onProceedToPayment({ printerCode, file, pages });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="book-print-job">
      <h2>Book a Print Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={printerCode}
          onChange={(e) => setPrinterCode(e.target.value)}
          placeholder="Printer Code"
        />
        <input
          type="file"
          onChange={handleFileChange}
        />
        <input
          type="number"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          placeholder="Number of Pages"
        />
        <button type="submit">Proceed to Payment</button>
      </form>
      <button onClick={() => onGoBackToHome()}>Back to Home</button>
    </div>
  );
}

export default BookPrintJob;
