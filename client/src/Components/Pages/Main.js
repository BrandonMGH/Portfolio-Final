import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScrollIntoView from 'react-scroll-into-view'
import Fade from 'react-reveal/Fade';
import './Main.css'


// ** PAGES ** // 
import Intro from './Intro'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Bufferzone from './bufferzone'
import Portfolio from './Portfolio'
import ContactMe from './ContactMe'
import Footer from './Footer'




class Main extends Component {


  OnClickTest() {
    return console.log("hi again")
  }


  render() {


    return (
      <Container>
        <nav role="navigation">
          <div id="menuToggle">

            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>


            <ul id="menu">
              <ScrollIntoView selector=".AboutMeScroll"><a><li id="pointer">About</li></a></ScrollIntoView>
              <ScrollIntoView selector=".SkillsScroll"><a><li id="pointer">Skills</li></a></ScrollIntoView>
              <ScrollIntoView selector=".PortfolioScroll"><a><li id="pointer">Portfolio</li></a></ScrollIntoView>
              <ScrollIntoView selector=".ContactMeScroll"><a><li id="pointer">Contact</li></a></ScrollIntoView>
              <a href="#"><li>Return to Top</li></a>
            </ul>
          </div>
        </nav>

        <div ><Intro /></div>


        
        <div className="AboutMeScroll"><AboutMe /></div>
        <div className="SkillsScroll"><Skills /></div>
        <div><Bufferzone /></div>
        <div className="PortfolioScroll" ><Portfolio /></div>
        <div className="ContactMeScroll"><ContactMe /></div>
        <Footer />

      </Container>



    );
  }
}

export default Main;