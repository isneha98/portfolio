import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../config';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const loginUrl = `${BASE_URL}/api/login`;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the backend API
      const response = await axios.post(loginUrl, { username, password });
      // console.log(response.data); // Handle response as needed
      if (response.status === 200) {
        navigate('/dashboard');
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      // console.error(error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;





