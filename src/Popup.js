
// Popup.js
import React from "react";
import "./Popup.css"; // Import a CSS file for styling (create this file)

export default function Popup({ title, content, onClose }) {
    const handleClose = () => {
        onClose();
    };

    return (
        <div className="popup-container" onClick={handleClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{title}</h2>
                <div className="popup-content">{content}</div>
            </div>
        </div>
    );
}
