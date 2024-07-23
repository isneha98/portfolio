import React, { useState } from 'react';
import { Navbar, Nav, Container ,NavDropdown} from 'react-bootstrap';
import { Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/frontend/Navigation.css';
import Search from './Search';


const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search operation based on searchQuery
    console.log('Performing search for:', searchQuery);
    // You can implement the actual search functionality here
  };
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home" className="logo">sneha pareek</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className='navbarItems'>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            {/* <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#testinomial">Testinomial</Nav.Link> */}
            <Nav.Link href="#contact">Contact</Nav.Link>
            {/* <Form onSubmit={handleSearch} className="d-flex"> */}
              {/* <Form.Control
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <Button type="submit" variant="outline-light">Search</Button>
            </Form> */}
            
            {/* <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
           </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
