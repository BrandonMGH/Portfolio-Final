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
// import PortfolioImages from './PortfolioImags'
import './PortfolioCarousel.css'
import All from '../PortforolioProjectLinks/All'






class PortfolioCarousel extends React.Component {

 
  render() {
  
    return (
      <div className="Black">
        <h1>-PORTFOLIO-</h1>
        <Carousel className="Carousel">
                <div className="CarouselImgContainer">
                    <img className="CarouselImg" src={got2} align="middle"/>
                    <p className="legend">HTML/CSS/Javascript Projects</p>
                </div>
                <div>
                    <img className="CarouselImg" src={chatbox} align="middle"/>
                    <p className="legend">Node Projects</p>
                </div>
                <div>
                    <img className="CarouselImg" src={cameragirl} align="middle"/>
                    <p className="legend">React Projects</p>
                </div>
                <div>
                    <img className="CarouselImg" src={codeall} align="middle" />
                    <p className="legend">All Projects</p>
                </div>
            </Carousel>
           
              <div className="White"><All /></div>

     
       
      </div>
    );
  }
}

export default PortfolioCarousel;