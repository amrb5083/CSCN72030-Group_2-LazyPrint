// src/components/HomePage.js
import React from 'react';
import '../styles/HomePage.css';

function HomePage({ onBookPrintJob, onFindPrinters, onSettings }) {
  return (
    <div className="home-page">
      <h2>LazyPrint</h2>
      <button onClick={onBookPrintJob}>Book a Print Job</button>
      <button onClick={onFindPrinters}>Find Nearby Printers</button>
      <button onClick={onSettings}>Settings</button>
    </div>
  );
}

export default HomePage;
