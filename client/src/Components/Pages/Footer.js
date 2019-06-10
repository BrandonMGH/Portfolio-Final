import React, { Component } from "react";
import GitHubMark from './GitHubMark.png'
import linkedinlogo from './linkedinlogo.png'
import "./Footer.css";

class Footer extends Component {
  render() {
    
    return (<div className="Mainfooter">
         <a href="https://github.com/BrandonMGH"><img src={GitHubMark} id="footerIcon" height="50" width="50"></img></a>
         <a href="https://www.linkedin.com/in/brandon-harris-471bb932/"><img src={linkedinlogo} id="footerIcon" height="50" width="50"></img></a>
        <p>Brandon Harris @ 2019</p>
      
      </div>
    );
  }
}

export default Footer;