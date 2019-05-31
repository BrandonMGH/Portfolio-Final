import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import me from '../Images/me.jpg'
// import './AboutMe.css'
import './AboutMeInfo.css'





class AboutMeInfo extends Component {

    
  

  render() {
    return (
      <Container className="AboutMeContainer">
        <Row>
          <h1 className="AboutMe">- ABOUT ME - </h1>
        </Row>
        <Row>
        <img src={me} className="AboutMeImg" alt="me"/>
        </Row>
        <Row>
          <p className="AboutMe">I am a Full Stack Web Developer with a certificate of completion from the UC San Diego Bootcamp Extension Course.  I specialize in the creation dynamic websites that emphasize ease of use and timely responsiveness</p>
        </Row>
        
      </Container>
    );
  }
}

export default AboutMeInfo;