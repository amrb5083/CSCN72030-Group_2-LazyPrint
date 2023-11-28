// src/components/Settings.js
import React, { useState } from 'react';

function Settings({ onLogout }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = (event) => {
    event.preventDefault();
    // Handle user settings update
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="New Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
        />
        <div>
          <button type="submit">Update</button>
        </div>
        
      </form>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Settings;
