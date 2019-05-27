import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class All extends Component {

  state = {
    javascriptProj: ProjectObject.javascriptProj,
    nodeProj: ProjectObject.NodeProj
    // reactProj: 

  }



  render() {

    const javascriptProj = this.state.javascriptProj
    const nodeProj = this.state.nodeProj
    return (
      <Container>
        <Row>
          <h3>HTML/CSS/Javascript</h3> 
          {javascriptProj.map(properties => (
            <div>
              <Col xs={12} md={4} className="ProjectCol">
                <a href={properties.portfolioLink}>
                  <img src={properties.picture} width="250" height="200" />
                  <p>{properties.paragraph}</p>
                </a>
              </Col>
            </div>
          ))}

        </Row>
        <Row>
          <h3>Node</h3> 
          {nodeProj.map(properties => (
            <div>
              <Col xs={12} md={4} className="ProjectCol">
                <a href={properties.portfolioLink}>
                  <img src={properties.picture} width="250" height="200" />
                  <p>{properties.paragraph}</p>
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