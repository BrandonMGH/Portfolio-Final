import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
      onMouseDown={this.props.handleMouseDown}
        className={visibility}>
        <h2><a href="#">About Me</a></h2>
        <h2><a href="#">Skills</a></h2>
        <h2><a href="#">Portfolio</a></h2>
        <h2><a href="#">Contact Me</a></h2>
        <div className="footer">
          <p className="hoverIcon">Place Drag Down Item here</p>
        </div>
      </div>
    );
  }
}

export default Menu;