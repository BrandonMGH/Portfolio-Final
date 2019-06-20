import React, { Component } from "react";
// import Particles from 'react-particles-js';
import Particles from "../Particles/Particles";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './AboutMe.css'
import AboutMeInfo from '../AboutMeInfo/AboutMeInfo'



class AboutMe extends Component {




  render() {
    return (
      <div className="container">
        <div className="AboutMeBackground">
          {/* <Particles ></Particles> */}
          <AboutMeInfo className="AboutMeInfo" />
          {/* <Particles /> */}
        </div>
        {/* <Particles className="AboutMeParticles"
          params={particleOpt} > <p>Hello</p></Particles> */}


      </div>

    );
  }
}

export default AboutMe;