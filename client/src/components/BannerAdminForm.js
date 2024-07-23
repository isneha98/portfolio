// Admin/AdminBannerForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const AdminBannerForm = () => {
  const [formData, setFormData] = useState({
    heading: '',
    subheading: '',
    paragraph: '',
    imageUrl: '',
  });

  useEffect(() => {
    fetchBannerData();
  }, []);

  const fetchBannerData = async () => {
    try {
      const response = await axios.get('/api/banner'); // Adjust the API endpoint
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching banner data:', error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/banner', formData); // Adjust the API endpoint
      alert('Banner updated successfully');
    } catch (error) {
      console.error('Error updating banner:', error);
      alert('An error occurred while updating banner');
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="heading">
        <Form.Label>Heading</Form.Label>
        <Form.Control
          type="text"
          name="heading"
          value={formData.heading}
          onChange={handleFormChange}
        />
      </Form.Group>
      {/* ... other form fields ... */}
      <Button type="submit">Update Banner</Button>
    </Form>
  );
};

export default AdminBannerForm;
