import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Row>
        <Col className="text-center">
          <h1 className="display-1 text-dark">404</h1>
          <h2 className="mb-4 text-secondary">Page Not Found</h2>
          <p className="mb-4">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button variant="primary" onClick={handleGoBack}>
            Go Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
