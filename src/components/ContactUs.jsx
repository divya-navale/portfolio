import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Row>
                <Col md={6}>
                    <h4>Email Us</h4>
                    <Form>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h4>Call Us</h4>
                    <p>Phone: +1 (123) 456-7890</p>
                    <h4>Follow Us</h4>
                    <p>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |{' '}
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;