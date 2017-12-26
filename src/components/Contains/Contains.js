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
import Nav from '../../components/Nav/nav';
import Discover from './ContainsBody';

import './contains.css';

class Contains extends Component {
  render(){
    return(
      <div className="contains">
        <Route exact path="/" component={Discover} />
        <Route path="/discover" component={Discover} />
        <Route path="/album/:id" component={SongList} />
        <Route path="/topic" component={About} />
      </div>
    );
  };
}

export default Contains;