import React from 'react';

function PaymentScreen({ jobDetails, onNavigate }) {
  const { printerCode, fileName, pages } = jobDetails;
  const ratePerPage = 0.03; // Rate per page
  const totalPrice = pages * ratePerPage; // Total price calculation

  return (
    <div className="invoice">
      <h1>Invoice</h1>
      <h2>Booking Confirmed</h2>
      <p><strong>Printer Code:</strong> {printerCode}</p>
      <p><strong>File:</strong> {fileName}</p>
      <p><strong>Pages:</strong> {pages}</p>
      <p><strong>Rate:</strong> ${ratePerPage}/pg</p>
      <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p> {/* Display total price */}

      {/* Button to navigate back to home */}
      <button onClick={() => onNavigate('home')}>Back to Home</button>
    </div>
  );
}

export default PaymentScreen;