import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';
import NewAblum from '../../page/NewAblum';
import HomePage from '../../page/HomePage';
import Nav from '../../components/Nav/nav';
import Topics from '../../page/Topic';

import './contains.css';

class ContainsBody extends Component {
  render(){
    return(
      <div className="contains-body">
        <Nav />
        <Route exact path="/"  component={HomePage} />
        <Route exact path="/discover"  component={HomePage} />
        <Route path="/discover/album"  component={NewAblum} />
        <Route path="/discover/top"  component={Topics} />
      </div>
    );
  };
}

export default ContainsBody;