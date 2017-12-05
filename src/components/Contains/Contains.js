import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../../page/Home';
import About from '../../page/About';
import Topics from '../../page/Topic';

import './contains.css';

class Contains extends Component {
  render(){
    return(
      <div className="wrap-contains">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      </div>
    );
  };
}

export default Contains;