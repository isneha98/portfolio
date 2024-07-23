// LogoutButton.js (or any component with a logout button)

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';

const LogoutButton = () => {
    const navigate = useNavigate();
    const logoutUrl = `${BASE_URL}/api/logout`;
    const handleLogout = async () => {
      try {
        await axios.post(logoutUrl);
          navigate("/");
      } catch (error) {
        console.error(error);
        // Handle error if necessary
      }
    };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
