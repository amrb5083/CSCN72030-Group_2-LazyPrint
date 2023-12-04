import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Settings() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const accessToken = await getAccessTokenSilently({
        audience: 'https://dev-21g40tcdrzxqardr.us.auth0.com/api/v2',
        scope: 'update:users' // Scope to update user details
      });
      
      console.log(accessToken); // Temporarily log the token to check its value

      const response = await fetch(`https://dev-21g40tcdrzxqardr.us.auth0.com/api/v2/users/${user.sub}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          email: email,
          password: password // Update both email and password
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        console.error(`HTTP Error: ${response.statusText}`, errorBody);
        alert(`Error: ${response.statusText}\n${JSON.stringify(errorBody)}`);
        throw new Error(`HTTP Error: ${response.statusText}`);
      }

      const updatedUser = await response.json();
      console.log('User updated successfully:', updatedUser);
      alert('Profile updated successfully.');
    } catch (error) {
      console.error('Update Error:', error);
      alert('An error occurred while updating the profile.');
    }
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="New Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Settings;
