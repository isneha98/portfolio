import React, { useState ,useEffect } from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import contactme from "../image/contactme.png";
import '../css/frontend/Contact.css';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    // Clear the success message after 5 seconds (5000 milliseconds)
    const successMessageTimer = setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);

    // Clear the error message after 5 seconds (5000 milliseconds)
    const errorMessageTimer = setTimeout(() => {
      setErrorMessage(false);
    }, 5000);

    // Clear the timers when the component unmounts to avoid memory leaks
    return () => {
      clearTimeout(successMessageTimer);
      clearTimeout(errorMessageTimer);
    };
  }, [successMessage, errorMessage]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all the fields.');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/submit", formData);
      setSuccessMessage('Thanks For Contacting Us.Your Query Submitted Successfully');
      setFormData({ name: '', email: '', message: '' }); // Clear the form data after successful submission
      setErrorMessage(false);
    } catch (error) {
      setSuccessMessage(false);
      setErrorMessage('An error occurred during submission.');
    }
  };

  return (
    <section id="contact" className='contact_section'>
      <Container>
        <div className="contact_container">
          <div className='contact_header'>
            <h2 className='contact_title'>Contact Me</h2>
          </div>
          <div className='contact_lines'>
            <p>I value your feedback and input. Feel free to drop me a message using the contact details listed here.</p>
          </div>

          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
            <Form onSubmit={handleSubmit}>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Write Your Name" value={formData.name} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" placeholder="Write Message......" rows={3} value={formData.message} onChange={handleInputChange} />
                </Form.Group>
                <Button type="submit">submit</Button>
              </Form>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="contactimg ">
                <Image src={contactme} className="contact_me img-fluid" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
