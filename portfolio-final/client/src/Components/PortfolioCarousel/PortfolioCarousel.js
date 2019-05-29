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
     
      shownProject: null
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="Black">
        <h1>-PORTFOLIO-</h1>
          <Carousel className="Carousel">
            <div >
              <img  className="CarouselImg" src={got2} align="middle" />
              <p onClick={this.handleButtonClickOne} className="legend">HTML/CSS/Javascript Projects</p>
            </div>
            <div >
              <img  className="CarouselImg" src={chatbox} align="middle" />
              <p onClick={this.handleButtonClickTwo} className="legend">Node Projects</p>
            </div>
            <div >
              <img className="CarouselImg" src={cameragirl} align="middle" />
              <p  onClick={this.handleButtonClickThree} className="legend">React Projects</p>
            </div>
            <div>
              <img className="CarouselImg" src={codeall} align="middle" />
              <p onClick={this.handleButtonClickFour} className="legend">All Projects</p>
            </div>
          </Carousel>
         

          <div className="White">{this.state.shownProject}</div>
      </div>
    );
  }
}

export default PortfolioCarousel;