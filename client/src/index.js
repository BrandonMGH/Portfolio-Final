import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Main from "./Components/Pages/Main";

 
ReactDOM.render(
  <Router>

  <Route exact path="/" component={Main} />
  </Router>, 
  document.querySelector("#body")
 
  
);