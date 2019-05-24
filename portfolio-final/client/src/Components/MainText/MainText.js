import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./MainText.css";

class MainText extends Component {
  render() {
    
    return (
     <Row>
        
      <div className="MainText">
      <Col xs={6} md={4}>
        <h1>Brandon Harris</h1>
        </Col>
        <Col xs={6} md={8}>
        <h2>Full Stack Web Developer</h2>
        </Col>
      </div>
      </Row>
    );
  }
}

export default MainText;