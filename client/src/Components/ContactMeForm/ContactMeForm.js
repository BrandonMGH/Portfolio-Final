import React, { Component } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class ContactMeForm extends Component {

  

  render() {

 
    return (
      <form method="POST">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
  
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
  
      <label htmlFor="message">Message</label>
      <textarea name="message" rows="3"></textarea>
  
      <input type="submit" />
    </form>

    );
  }
}

export default ContactMeForm;