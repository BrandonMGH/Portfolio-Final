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
              <ScrollIntoView selector=".AboutMeScroll"><a><li>About</li></a></ScrollIntoView>
              <ScrollIntoView selector=".SkillsScroll"><a><li>Skills</li></a></ScrollIntoView>
              <ScrollIntoView selector=".PortfolioScroll"><a><li>Portfolio</li></a></ScrollIntoView>
              <ScrollIntoView selector=".ContactMeScroll"><a><li>Contact</li></a></ScrollIntoView>
              <a href="#"><li>Return to Top</li></a>
            </ul>
          </div>
        </nav>

        <div ><Intro /></div>


        
        <div className="AboutMeScroll"><AboutMe /></div>
        <div className="SkillsScroll"><Skills /></div>
        <div className="PortfolioScroll" ><Portfolio /></div>
        <div className="ContactMeScroll"><ContactMe /></div>
        <Footer />

      </Container>



    );
  }
}

export default Main;