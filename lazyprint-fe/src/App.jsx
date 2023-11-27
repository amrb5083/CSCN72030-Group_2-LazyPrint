// App.js
import React, { useState } from 'react';
import Login from './components/Login/Login';
import PrintJobComponent from './components/PrintJob/PrintJob';
import PrinterListComponent from './components/PrinterList/PrinterList';
import ConfirmationComponent from './components/Confirmation/Confirmation';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedPrintJob, setSelectedPrintJob] = useState(null);
  const [selectedPrinter, setSelectedPrinter] = useState(null);

  // Sample logged-in user data
  const dummyUser = {
    id: 1,
    username: 'dummyuser',
    // Add other user data as needed
  };

  // Sample printers data
  const printersData = [
    { id: 1, name: 'Printer A', distance: 5, time: 10 },
    { id: 2, name: 'Printer B', distance: 8, time: 15 },
    // Add more printer data as needed
  ];

  const handleLogin = () => {
    // For simplicity, we're setting the dummy user when logging in
    setLoggedInUser(dummyUser);
  };

  const handleSelectPrintJob = (printJob) => {
    setSelectedPrintJob(printJob);
  };

  const handleSelectPrinter = (printer) => {
    setSelectedPrinter(printer);
  };

  return (
    <div>
      {!loggedInUser && <Login onLogin={handleLogin} />}
      {loggedInUser && !selectedPrintJob && <PrintJobComponent onSelectPrintJob={handleSelectPrintJob} />}
      {loggedInUser && selectedPrintJob && !selectedPrinter && (
        <PrinterListComponent printers={printersData} onSelectPrinter={handleSelectPrinter} />
      )}
      {loggedInUser && selectedPrintJob && selectedPrinter && (
        <ConfirmationComponent selectedPrintJob={selectedPrintJob} selectedPrinter={selectedPrinter} />
      )}
    </div>
  );
};

export default App;
