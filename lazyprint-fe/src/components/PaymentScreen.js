// src/components/PaymentScreen.js
import React from 'react';

function PaymentScreen({ jobDetails, onPay }) {
  return (
    <div className="payment-screen">
      <h2>Invoice</h2>
      <p>Printer Code: {jobDetails.printerCode}</p>
      <p>File: {jobDetails.file}</p>
      <p>Pages: {jobDetails.pages}</p>
      {/* Display cost and other details */}
      <button onClick={onPay}>Pay for Job</button>
    </div>
  );
}

export default PaymentScreen;