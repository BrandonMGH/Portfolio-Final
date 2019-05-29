import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class Node extends Component {

  state = {
    nodeProj: ProjectObject.NodeProj,
  }

  render() {
 
    const nodeProj = this.state.nodeProj
     
    return (
      <Container>
       
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


      </Container>
      

    );
  }
}

export default Node;