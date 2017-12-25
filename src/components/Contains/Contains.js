import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';
import NewAblum from '../../page/NewAblum';
import About from '../../page/About';
import Topics from '../../page/Topic';
import SongList from '../../page/SongList';
import HomePage from '../../page/HomePage';

import './contains.css';

class Contains extends Component {
  render(){
    return(
      <div className="contains">
      <Route exact path="/"  component={NewAblum}/>
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/home" component={HomePage} />
      <Route path="/album/:id" component={SongList} />
      </div>
    );
  };
}

export default Contains;