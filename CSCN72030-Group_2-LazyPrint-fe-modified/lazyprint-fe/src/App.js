// src/App.js
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import HomePage from './components/Homepage';
import BookPrintJob from './components/BookPrintJob';
import FindPrinters from './components/FindPrinters';
import PaymentScreen from './components/PaymentScreen';
import Settings from './components/Settings';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);
  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    if (isLoading) {
      // Do nothing while Auth0 is loading
      return;
    }
    if (isAuthenticated) {
      setCurrentPage('home');
      // Here, you would also want to set the user state based on the authenticated user
      // setUser(someUserObject);
    } else {
      loginWithRedirect(); // Automatically redirect to Auth0 login if not authenticated
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const renderComponent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
              case 'bookPrintJob':
        return <BookPrintJob onNavigate={navigate} jobDetails={jobDetails} />;
      case 'findPrinters':
        return <FindPrinters onNavigate={navigate} />;
      case 'payment':
        return <PaymentScreen onNavigate={navigate} jobDetails={jobDetails} />;
      case 'settings':
        return <Settings onNavigate={navigate} />;
      default:
        return <Login onNavigate={navigate} />;
    }
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={() => setCurrentPage('home')}
    >
      <div className="App">
        {renderComponent()}
      </div>
    </Auth0Provider>
  );
}

export default App;
