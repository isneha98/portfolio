import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../config';

const RegisterForm = () => {
  const registerUrl = `${BASE_URL}/api/register`;

  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrorMessage('Please fill in all the fields.');
      setSuccessMessage('');
      return;
    }
    else if (!formData.username ) {
      setErrorMessage('Please Enter Username');
      setSuccessMessage('');
      return;
    }
    else if (!formData.email ) {
      setErrorMessage('Please Enter email');
      setSuccessMessage('');
      return;
    }
    else if (!formData.password ) {
      setErrorMessage('Please Enter Password');
      setSuccessMessage('');
      return;
    }
   
    else{
    try {
      const response = await axios.post(registerUrl, formData);
     
      setSuccessMessage('Registration successful!');
      setErrorMessage('');
      navigate('/login');
    } catch (error) {
      // console.error(error.response.data);
      setSuccessMessage('');
      setErrorMessage('An error occurred during registration.');
    }
  };
    }


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
