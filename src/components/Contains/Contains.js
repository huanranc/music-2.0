import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NewAblum from '../../page/NewAblum';
import About from '../../page/About';
import Topics from '../../page/Topic';
import Datails from '../../page/Datails';

import './contains.css';

class Contains extends Component {
  render(){
    return(
      <div className="contains">
      <Route exact path="/"  component={NewAblum}/>
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/datails/:id" component={Datails} />
      </div>
    );
  };
}

export default Contains;