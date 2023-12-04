// src/components/PaymentScreen.js
import BookPrintJob from './BookPrintJob';
import React from 'react';

function PaymentScreen({ jobDetails, onPay }) {

  const handlePay = () => {
    const apiUrl = 'http://127.0.0.1:5000/api/pay-for-job';
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        printerCode: jobDetails.printerCode,
        pages: jobDetails.pages,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Payment processed:', data);
        // Call onPay after processing payment
        onPay();
      })
      .catch(error => {
        console.error('Error processing payment:', error);
      });
  };
  

  const handlePaymentAndOnPay = () => {
    // Call handlePay to process payment
    handlePay();
    // Call onPay after processing payment
    onPay();
  };

  return (
    <div className="payment-screen">
      <h2>Invoice</h2>
      <p>Printer Code: {jobDetails.printerCode}</p>
      <p>File: {jobDetails.fileName}</p>
      <p>Pages: {jobDetails.pages}</p>
      {/* Display cost and other details */}
      <button onClick={handlePaymentAndOnPay}>Pay for Job</button>
    </div>
  );
}

export default PaymentScreen;
