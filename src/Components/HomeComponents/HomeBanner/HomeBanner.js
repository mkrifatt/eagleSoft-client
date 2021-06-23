import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import office from '../../../img/office.jpg';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <Container>
            <Row className="p-5">
                <Col md={6} className="mt-4 d-flex justify-content-center">
                    <div>
                    <h1 className="section-title">Web and mobile app development</h1>
                    <p  className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <Button variant='danger' className="btn-brand">Explore</Button>
                    </div>
                </Col>
                <Col md={5} className="offset-md-1 mt-4">
                <img style={{border: '5px solid #1293F4'}} className="img-fluid" src={office} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeBanner;