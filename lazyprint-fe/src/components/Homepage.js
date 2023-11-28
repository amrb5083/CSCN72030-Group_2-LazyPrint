// src/components/HomePage.js
import React from 'react';
import { useState } from 'react';
import '../styles/HomePage.css';


// function Settings({ onLogout }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

  // const handleUpdate = (event) => {
  //   event.preventDefault();
  //   // Handle user settings update
  // };

function HomePage({ onBookPrintJob, onFindPrinters, onSettings, onLogout }) {
  return (
    <div className="home-page">
      <h2>LazyPrint</h2>
      <button onClick={onBookPrintJob}>Book a Print Job</button>
      <button onClick={onFindPrinters}>Find Nearby Printers</button>
      <button onClick={onSettings}>Settings</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
