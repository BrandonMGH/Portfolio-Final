import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class ReactProj extends Component {

  state = {
    reactProj: ProjectObject.reactProj,
  }

  

 

  render() {


    const reactProj = this.state.reactProj

    
    return (
      <Container>
        
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

export default ReactProj;