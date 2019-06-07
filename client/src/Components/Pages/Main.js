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
              <ScrollIntoView selector=".ContactMeScroll"><a><li>Contact Me</li></a></ScrollIntoView>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Info</li></a>
              <a href="#"><li>Contact</li></a>
              <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
            </ul>
          </div>
        </nav>

        <div ><Intro /></div>


        <ScrollIntoView selector=".ContactMeScroll"><button>Test me</button></ScrollIntoView>
        <button onClick={this.OnClickTest}>Console Log</button>
        <div ><AboutMe /></div>
        <div ><Skills /></div>
        <div ><Portfolio /></div>
        <div className="ContactMeScroll"><ContactMe /></div>
        <Footer />

      </Container>



    );
  }
}

export default Main;