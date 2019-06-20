import React, { Component } from "react";
import Particles from "react-particles-js";


class Canvas extends Component {
  state = { width: "px", height: "px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`
    });
  };
  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
      <Particles 
        {...this.state}
        params={{
          particles: {
            number: {
              value: 200
            },
            move: {
              enable: true,
              speed: 2,
              random: true,
              direction: "none",
              bounce: true,
              out_mode: "bounce",
              attract: {
                enable: true,
                rotateX: 10,
                rotateY: 10
              }
            },
            shape: {
              type: "cirle",
              stroke: {
                width: 2,
                color: "#b6b2b2"
              }
            },
            color: {
              value: ["#000000"]
            },
            size: {
              value: 10
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
