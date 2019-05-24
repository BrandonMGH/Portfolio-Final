import React, { Component } from "react";
import Particles from "react-particles-js";


class Canvas extends Component {
  // state = { width: "0px", height: "px" };
  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   window.addEventListener("resize", this.updateWindowDimensions);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateWindowDimensions);
  // }
  // updateWindowDimensions = () => {
  //   this.setState({
  //     width: `${window.innerWidth}px`,
  //     height: `${window.innerHeight}px`
  //   });
  // };
  render() {
    // const { width, height } = this.state;
    // console.log(width, height);
    return (
      <Particles 
        // {...this.state}
        params={{
          particles: {
            number: {
              value: 100
            },
            shape: {
              type: "square",
              stroke: {
                width: 0,
                color: "#b6b2b2"
              }
            },
            color: {
              value: ["#383838"]
            },
            size: {
              value: 5
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          },
        }}
      />
    );
  }
}

export default Canvas;
