import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './siderbar.css';

class Siderbar extends Component {
  render(){
    return(
      <siderbar className="wrap-siderbar ">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        </ul>
      </siderbar>
    );
  };
}

export default Siderbar;