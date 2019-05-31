import React, { Component } from "react";
import Bounce from 'react-reveal/Bounce';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class HTMLCSSJS extends Component {

  state = {
    javascriptProj: ProjectObject.javascriptProj,
    
  }

  

 

  render() {

    const javascriptProj = this.state.javascriptProj
 
    return (
      <Container>
         <Bounce Top>
             <Row>
      
          <h3 className="projBorder">HTML/CSS/Javascript Projects</h3> 
          {javascriptProj.map(properties => (
             <Bounce Top><div>
              <Col xs={12} md={4} className="ProjectCol hover">
                <a href={properties.portfolioLink}>
                  <div> 
                  <img src={properties.picture} className="imgBorder"  width="250" height="200" />
                  <p className="text" >{properties.paragraph}</p>
                  </div>
                </a>   
              </Col>
            </div></Bounce>
          ))}
        
        </Row>
        </Bounce>
      </Container>
      

    );
  }
}

export default HTMLCSSJS;