// src/components/Login.js
import React from 'react';
import LoginButton from './LoginButton'; // Importing the LoginButton component

function Login() {
    return (
        <div className="login-form">
            <h2>Login</h2>
            {/* Using the LoginButton component for Auth0 authentication */}
            <LoginButton />
        </div>
    );
}

export default Login;
