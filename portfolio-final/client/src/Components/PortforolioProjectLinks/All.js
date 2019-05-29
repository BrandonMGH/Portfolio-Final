import React, { Component } from "react";
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
        <Row>
          <h3 className="titleCol">HTML/CSS/Javascript</h3> 
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
        <h3 className="invisiline">_</h3>  
        <Row>
        <h3 className="titleCol">NODE</h3> 
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
        <h3 className="invisiline">_</h3> 
        <Row>
          <h3 className="titleCol">React</h3> 
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


      </Container>
      

    );
  }
}

export default All;