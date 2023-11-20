// Login.jsx
import React, { useState } from 'react';
import { loginContainerStyle, inputStyle, buttonStyle } from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic (e.g., send request to a server)
    // For simplicity, just check if both username and password are not empty
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter valid username and password');
    }
  };

  return (
    <div style={loginContainerStyle}>
      {isLoggedIn ? (
        <p>Welcome, {username}!</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleLogin} style={buttonStyle}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
