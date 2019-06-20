import React, { Component } from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import './Navbar.css'

class NavBar extends Component {

    OnClickTest(){
        console.log("hi")
      }

      

render() {
    console.log(this.props.proptest)
  return (
    <nav role="navigation">
    <div id="menuToggle">
      
      <input type="checkbox" />
    
      <span></span>
      <span></span>
      <span></span>
      
      
      <ul id="menu">
        <a href="#"><li onClick={this.props.clicktest}>Home</li></a>
     <a href="#"><li>About</li></a>
        <a href="#"><li>Info</li></a>
        <a href="#"><li>Contact</li></a>
        <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
      </ul>
    </div>
  </nav>
    );
  }
}

export default NavBar;