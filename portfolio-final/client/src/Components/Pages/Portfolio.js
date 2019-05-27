import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PortfolioCarousel from '../PortfolioCarousel/PortfolioCarousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Portfolio.css'


class Portfolio extends Component {

  render() {
    return (
      <div>
       <p>.</p>
        <PortfolioCarousel />
      </div> 
    );
  }
}

export default Portfolio;