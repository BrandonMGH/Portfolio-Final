import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PortfolioProjectlinks.css'






class All extends Component {

 
  render() {
  
    return (
        <Container>
            <Row>
                <Col xs={12} md={4} className="ProjectCol">Test</Col>
                <Col xs={12} md={4} className="ProjectCol">TeSt</Col>
                <Col xs={12} md={4} className="ProjectCol">TEst</Col>
            </Row>
        </Container>
    );
  }
}

export default All;