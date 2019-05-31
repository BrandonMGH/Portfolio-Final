import React, { Component } from "react";
import Bounce from 'react-reveal/Bounce';
import "./Title.css";

class Title extends Component {
  render() {
    
    return (
      <div className="title">
        <Bounce Top><h1>Brandon Harris</h1></Bounce>
        <Bounce Bottom><h2>Full Stack Web Developer</h2></Bounce>
      </div>
    );
  }
}

export default Title;