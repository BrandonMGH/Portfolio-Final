import React, { Component } from 'react';
import "./Intro.css";
import Particles from 'react-particles-js';
import Title from '../Title/Title'

const particleOpt = {
    particles: {
        number: {
            value: 250,
            density: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                speed: 4,
                size_min: 0.3
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            random: true,
            speed: 5,
            direction: "top",
            out_mode: "out"
        },
        color: {
            value: ["#000000"]
          },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
            },
            repulse: {
                distance: 400,
                duration: 4
            }
        }
    }
}



class Intro extends Component {
    render() {
      return (
       <div>
          <Title />
         
         <Particles className="particles"
              params={particleOpt}>
              </Particles>
            
           
       </div>
      );
    }
  }

export default Intro;
