import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import got from './got.jpg'
import codespot from './codespot.PNG'
import cameragirl from './cameragirl.png'
// import PortfolioImages from './PortfolioImags'
import './PortfolioCarousel.css'






class PortfolioCarousel extends React.Component {

 
  render() {
  
    return (
      <div >
        <Carousel className="Carousel">
                <div>
                    <img className="CarouselImg" src={got}/>
                    <p className="legend">HTML/CSS/Javascript</p>
                </div>
                <div>
                    <img className="CarouselImg" src={codespot}/>
                    <p className="legend">Node</p>
                </div>
                <div>
                    <img className="CarouselImg" src={cameragirl}/>
                    <p className="legend">React</p>
                </div>
                <div>
                    <img className="CarouselImg" src="https://cdn-images-1.medium.com/max/2600/0*HICLyAdNSIyT0ODU.jpg" />
                    <p className="legend">All</p>
                </div>
            </Carousel>
      </div>
    );
  }
}

export default PortfolioCarousel;