import React, { Component } from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class All extends Component {

  state = {
    javascriptProj: ProjectObject.javascriptProj,
    nodeProj: ProjectObject.NodeProj,
    reactProj: ProjectObject.reactProj,
    shownProject: null
  }

  

 

  render() {

    const javascriptProj = this.state.javascriptProj
    const nodeProj = this.state.nodeProj
    const reactProj = this.state.reactProj

    
    return (
      <Container>
        <LightSpeed left>
        <Row>
          <h3 className="projBorder">HTML/CSS/Javascript Projects</h3> 
          {javascriptProj.map(properties => (
            <div>
              <Col xs={12} md={4} className="ProjectCol hover">
                <a href={properties.portfolioLink}>
                  <div> 
                  <img src={properties.picture} className="imgBorder"  width="250" height="200" />
                  <p className="text" >{properties.paragraph}</p>
                  </div>
                </a>   
              </Col>
            </div>
          ))}

        </Row>
         
        <Row >
        <h3 className="projTitle projBorder">NODE Projects</h3> 
          {nodeProj.map(properties => (
            <div>
              <Col xs={12} md={4} className="ProjectCol hover">
                <a href={properties.portfolioLink}>
                  <img src={properties.picture} className="imgBorder" width="250" height="200" />
                  <p className="text">{properties.paragraph}</p>
                </a>
              </Col>
            </div>
          ))}

        </Row>
  
        <Row>
          <h3 className="projTitle projBorder">REACT PROJECTS</h3> 
          {reactProj.map(properties => (
            <div>
              <Col xs={12} md={4} className="ProjectCol hover">
                <a href={properties.portfolioLink}>
                  <img src={properties.picture} className="imgBorder" width="250" height="200" />
                  <p className="text">{properties.paragraph}</p>
                </a>
              </Col>
            </div>
          ))}

        </Row>

        </LightSpeed>
      </Container>
      

    );
  }
}

export default All;