import React, { useState } from 'react';
import '../styles/BookPrintJob.css';

function BookPrintJob({ onNavigate, setJobDetails }) {
  const [printerCode, setPrinterCode] = useState('');
  const [file, setFile] = useState('');
  const [pages, setPages] = useState('');
  const [fileName, setFileName] = useState('');
  const [isFileTypeSupported, setIsFileTypeSupported] = useState(true);
  const [isPrinterCodeValid, setIsPrinterCodeValid] = useState(true);
  const [fileUploadAttempted, setFileUploadAttempted] = useState(false);

  const validPrinterCodes = ["ABC123", "DEF456", "GHI789", "JKL012", "MNO345", "PQR678", "STU901", "VWX234", "YZA567", "BCD890"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validPrinterCodes.includes(printerCode) && isFileTypeSupported) {
      setJobDetails({ printerCode, file, pages, fileName });
      try {
        // Make a fetch request to update the printer's queue
        const response = await fetch('http://127.0.0.1:3003/api/update-queue', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            printerCode,
          }),
        });
  
        // Check if the update was successful
        if (response.ok) {
          // Continue with the payment process
          onNavigate('payment');

        } else {
          console.error('Failed to update printer queue');
        }
      } catch (error) {
        console.error('Error updating printer queue:', error);
      }
    } else {
      setIsPrinterCodeValid(false);
    }
  };

  const handleFileChange = (event) => {
    setFileUploadAttempted(true); // User has attempted to upload a file
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      return; // Exit if no file is selected
    }

    const allowedExtensions = ["pptx", "txt", "docx", "pdf", "rtf"];
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFile(content);
        setFileName(selectedFile.name);
        setIsFileTypeSupported(true);
      };
      reader.readAsText(selectedFile);
    } else {
      console.log("Unsupported file type. Allowed types: pptx, txt, docx, pdf, rtf.");
      event.target.value = null;
      setIsFileTypeSupported(false);
    }
  };

  const handlePrinterCodeChange = (event) => {
    setPrinterCode(event.target.value);
    setIsPrinterCodeValid(true); // Reset validation flag on user input
  };

  return (
    <div className="book-print-job">
      <h2>Book a Print Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={printerCode}
          onChange={handlePrinterCodeChange}
          placeholder="Printer Code"
          className={!isPrinterCodeValid ? 'invalid' : ''}
        />
        {!isPrinterCodeValid && <p className="error-message">Invalid printer code</p>}

        <input
          type="file"
          onChange={handleFileChange}
        />
        {fileUploadAttempted && !isFileTypeSupported && <p className="error-message">Unsupported file type</p>}

        <input
          type="number"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          placeholder="Number of Pages"
        />

        <button type="submit" disabled={!isFileTypeSupported || !isPrinterCodeValid}>Proceed to Payment</button>
      </form>
      <button onClick={() => onNavigate('home')}>Back to Home</button>
    </div>
  );
}

export default BookPrintJob;