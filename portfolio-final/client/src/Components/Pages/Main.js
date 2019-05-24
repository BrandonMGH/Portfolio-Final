import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import me from './me.jpg'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Skills from './Skills'
// import MenuButton from '../MenuButton/MenuButton'
import Portfolio from './Portfolio'
import Menu from '../Menu/Menu.js'
import './Main.css'

// const styles = {
//   root: {
//     fontFamily: "sans-serif",
//     textAlign: "center",
//     height: "100%",
//     background: "#222",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   }
// };

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }


  render() {
    return (
      <Container>
        <div className="background">
          {/* <MenuButton handleMouseDown={this.handleMouseDown}/> */}
          <Menu handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible} />
        </div>
        <Intro />
       <AboutMe />
       <Skills />
       <Portfolio />
        <footer>hi</footer>
      </Container>



    );
  }
}

export default Main;