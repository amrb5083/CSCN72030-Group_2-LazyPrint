// src/components/HomePage.js
import React from 'react';
import '../styles/HomePage.css';
import LogoutButton from './LogoutButton';

function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <h2>LazyPrint</h2>
      <LogoutButton onLogout={() => onNavigate('login')} />

      <button onClick={() => onNavigate('bookPrintJob')}>Book a Print Job</button>
      <button onClick={() => onNavigate('findPrinters')}>Find Nearby Printers</button>
      <button onClick={() => onNavigate('settings')}>Settings</button>
    </div>
  );
}

export default HomePage;
