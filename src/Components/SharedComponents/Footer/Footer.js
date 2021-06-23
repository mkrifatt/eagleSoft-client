import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css';
  

const Footer = () => {
    return (
        <footer className="mt-5 pt-5 bg-light">
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <h6 className="name mb-4">Lorem.</h6>
                        <p  className="text-muted">Lorem, ipsum.</p>
                        <p  className="text-muted">Lorem, ipsum dolor.</p>
                        <p  className="text-muted">Lorem, ipsum.</p>
                        <p  className="text-muted">Lorem ipsum dolor sit.</p>
                        <p  className="text-muted">Lorem.</p>
                    </Col>
                    <Col  xs={6} md={3}>
                        <h6  className="mb-4 name">Location</h6>
                        <p  className="text-muted"> <span className="mr-2"><FontAwesomeIcon icon={faMapMarkerAlt} /> </span> Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        <p  className="text-muted">  <span className="mr-2"><FontAwesomeIcon icon={faEnvelope} /> </span> Official: <a href="mailto:loremloremlorem@gmail.com" > loremloremlorem@gmail.com</a></p>
                        <p  className="text-muted"> <span className="mr-2"> <FontAwesomeIcon icon={faPhoneAlt} /> </span> Helpline : <a href="tel:0192222222"> 01922222222</a> (Available : 20:00 to 24:00)</p>
                    </Col>
                    <Col  xs={12} md={6}>
                    <Form >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email Address*" required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicSubject">
                            <Form.Control type="text" placeholder="Subject*" required />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea">
                            <Form.Control as="textarea" rows={3} placeholder="Your Message*" required/>
                        </Form.Group>

                        <Button variant="danger" className="btn-brand" type="submit"> Submit </Button>
                    </Form>
                    </Col>
                </Row>
                        <div className="copy-right text-center mt-3">
                            <p>{(new Date()).getFullYear()} &copy; by <a  href="//facebook.com/lorem.ispumlorem" target="-blank">  John Cena </a> . All Rights Reserved.</p>
                        </div>    
            </Container>
        </footer>
    );
};

export default Footer;