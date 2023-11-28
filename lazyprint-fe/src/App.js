// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import HomePage from './components/Homepage';
import BookPrintJob from './components/BookPrintJob';
import FindPrinters from './components/FindPrinters';
import PaymentScreen from './components/PaymentScreen';
import Settings from './components/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState('');
  const [jobDetails, setJobDetails] = useState({});

  const handleLogin = (username) => {
    setUser(username);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setUser('');
    setCurrentPage('login');
  };

  const handleProceedToPayment = (details) => {
    setJobDetails(details);
    setCurrentPage('payment');
  };

  const handlePaymentSuccess = () => {
    alert("Payment Successful");
    setCurrentPage('home');
  };

  const handleGoBackToHome = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onBookPrintJob={() => setCurrentPage('bookPrintJob')}
            onFindPrinters={() => setCurrentPage('findPrinters')}
            onSettings={() => setCurrentPage('settings')}
            onLogout={handleLogout}
          />
        );
      case 'bookPrintJob':
        return (
          <BookPrintJob 
            onProceedToPayment={handleProceedToPayment} 
            onGoBackToHome={handleGoBackToHome}
          />
        );
      case 'findPrinters':
        return (
          <FindPrinters 
            onBackToPrintJob={() => setCurrentPage('bookPrintJob')} 
            onGoBackToHome={handleGoBackToHome}
          />
        );
      case 'payment':
        return <PaymentScreen jobDetails={jobDetails} onPay={handlePaymentSuccess} />;
      case 'settings':
        return <Settings onLogout={handleLogout} />;
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
