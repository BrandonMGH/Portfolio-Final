import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import got2 from './got2.jpg'
import chatbox from './chatbox.jpg'
import cameragirl from './cameragirl.jpg'
import codeall from './codeall.jpg'
import Slider from "react-slick";
import './PortfolioCarousel.css'
import All from '../PortforolioProjectLinks/All'
import HTMLCSSJS from '../PortforolioProjectLinks/HTMLCSSJSprojects'
import Node from '../PortforolioProjectLinks/Node'
import ReactProj from '../PortforolioProjectLinks/React'





class PortfolioCarousel extends React.Component {

    state = {
     
      shownProject: <All />
    };

    handleButtonClickOne = () => {
      this.setState({shownProject: <HTMLCSSJS />})  
  }
  handleButtonClickTwo = () => {
    this.setState({shownProject: <Node />})  
}
handleButtonClickThree = () => {
  this.setState({shownProject: <ReactProj />})  
}
handleButtonClickFour = () => {
  this.setState({shownProject: <All />})  
}

  render() {
  
    return (
    <div className="Black">
        <h1 classname="photoCarouseltitle" align="middle">-PORTFOLIO-</h1>
        <div onClick={this.handleButtonClickOne} className="box">
        <img className="CarouselImg" src={got2} align="middle"></img>
        <div className="text">
            <h2>JAVASCRIPT PROJECTS</h2>
            
        </div>
        </div>
        <div onClick={this.handleButtonClickTwo} className="box">
        <img className="CarouselImg" src={chatbox} align="middle"></img>
        <div className="text">
            <h2>NODE PROJECTS</h2>
        </div>
        </div>
        <div onClick={this.handleButtonClickThree} className="box">
        <img className="CarouselImg" src={cameragirl} align="middle"></img>
        <div className="text">
            <h2>REACT PROJECTS</h2>
        </div>
        </div>
        <div onClick={this.handleButtonClickFour} className="box">
        <img className="CarouselImg" src={codeall} align="middle"></img>
        <div className="text">
            <h2>ALL PROJECTS</h2>
        </div>
        </div>

          {/* <Carousel className="Carousel">
            <div >
              <img  className="CarouselImg" src={got2} align="middle" />
              <p onClick={this.handleButtonClickOne} className="legend">View HTML/CSS/Javascript Projects</p>
             
            </div>
            <div >
              <img  className="CarouselImg" src={chatbox} align="middle" />
              <p onClick={this.handleButtonClickTwo} className="legend">View Node Projects</p>
            </div>
            <div >
              <img className="CarouselImg" src={cameragirl} align="middle" />
              <p  onClick={this.handleButtonClickThree} className="legend">View React Projects</p>
            </div>
            <div>
              <img className="CarouselImg" src={codeall} align="middle" />
              <p onClick={this.handleButtonClickFour} className="legend">View All Projects</p>
            </div>
          </Carousel>
          */}

          <div className="White">{this.state.shownProject}</div>
      </div>
    );
  }
}

export default PortfolioCarousel;