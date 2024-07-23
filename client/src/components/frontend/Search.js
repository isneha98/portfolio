import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = () => {
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
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSearch}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter your search query..."
                value={searchQuery}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type="submit" variant="primary">Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
