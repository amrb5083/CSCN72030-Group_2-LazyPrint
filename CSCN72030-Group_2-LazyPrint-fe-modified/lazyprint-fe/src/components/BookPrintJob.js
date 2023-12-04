// src/components/BookPrintJob.js
import React, { useState } from 'react';
import '../styles/BookPrintJob.css';

function BookPrintJob({ onProceedToPayment, onGoBackToHome }) {
  const [printerCode, setPrinterCode] = useState("");
  const [file, setFile] = useState('');
  const [pages, setPages] = useState(false);
  const [fileName, setFileName] = useState('');
  const [isFileTypeSupported, setIsFileTypeSupported] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    onProceedToPayment({ printerCode, file, pages, fileName });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
  
    const allowedExtensions = ["pptx", "txt", "docx", "pdf", "rtf"];
    const fileExtension = selectedFile.name.split(".").pop();
  
    if (allowedExtensions.includes(fileExtension)) {
      const fileName = selectedFile.name;
  
      reader.onload = (e) => {
        const content = e.target.result;
        setFile(content);
        setFileName(fileName);
        setIsFileTypeSupported(true);
      };
  
      reader.readAsText(selectedFile);
    } else {
      // Handle the case where an invalid file is selected
      console.log("This file type is not supported. Files supported include PowerPoint, Word documents, PDFs and text document files.");
  
      // Clear the selected file
      event.target.value = null;
      setIsFileTypeSupported(false);
    }
  };

  return (
    <div className="book-print-job">
      <h2>Book a Print Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={printerCode}
          onChange={(e) => setPrinterCode(e.target.value)}
          // "required" implies textbox cannot be left blank.
          required
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
          // "required" implies textbox cannot be left blank.
          required
          placeholder="Number of Pages"
        />
       <button type="submit" disabled={!isFileTypeSupported}>
          Proceed to Payment
        </button>
      </form>
      <button onClick={() => onGoBackToHome()}>Back to Home</button>
    </div>
  );
}

export default BookPrintJob;
