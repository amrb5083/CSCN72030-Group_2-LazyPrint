

import React, { useState } from "react";
import Popup from "./Popup"; // Adjust the path based on your project structure
import "./XpressPrint.css"; // Import a CSS file for styling (create this file)



const nearbyPrintersData = [
    {
        printerName: "Printer1",
        printerLatitude: 40.7128,
        printerLongitude: -74.0060,
        printerIPAddress: "192.168.1.2",
        printerID: 1,
    },
    {
        printerName: "Printer2",
        printerLatitude: 34.0522,
        printerLongitude: -118.2437,
        printerIPAddress: "192.168.1.3",
        printerID: 2,
    },
    {
        printerName: "Printer3",
        printerLatitude: 51.5074,
        printerLongitude: -0.1278,
        printerIPAddress: "192.168.1.4",
        printerID: 3,
    },
];


export default function XpressPrint() {
    const [loginPopup, setLoginPopup] = useState(false);
    const [nearbyPrintersPopup, setNearbyPrintersPopup] = useState(false);
    const [bookPrinterPopup, setBookPrinterPopup] = useState(false);

    const openPopup = (popupStateSetter) => {
        popupStateSetter(true);
    };

    const closePopup = (popupStateSetter) => {
        popupStateSetter(false);
    };

    return (
        <div className="center">
            <span className="main-text">XpressPrint</span>
            <div className="secondary-buttons">
                <button className="circle" onClick={() => openPopup(setLoginPopup)}>
                    Login/Create Account
                </button>
                <button className="circle" onClick={() => openPopup(setNearbyPrintersPopup)}>
                    Show Nearby Printers
                </button>
                <button className="circle" onClick={() => openPopup(setBookPrinterPopup)}>
                    Book a Printer
                </button>
            </div>

            {loginPopup && (
                <Popup
                    
                    content={<p>Login Form or any other login-related content goes here.</p>}
                    onClose={() => closePopup(setLoginPopup)}
                />
            )}

            {nearbyPrintersPopup && (
                <Popup
                    
                    content={<p>Content related to nearby printers goes here.</p>}
                    onClose={() => closePopup(setNearbyPrintersPopup)}
                />
            )}

            {bookPrinterPopup && (
                <Popup
                    
                    content={<p>Content related to booking a printer goes here.</p>}
                    onClose={() => closePopup(setBookPrinterPopup)}
                />
            )}
        </div>
    );
}




