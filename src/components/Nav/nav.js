import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import './nav.css';

class Nav extends Component {
  render(){
    return(
    <nav className="nav">
      <ul className="nav-bar">
        <li><Link to="/discover">个性推荐</Link></li>
        <li><Link to="/discover/top">排行榜</Link></li>
        <li><Link to="/discover/album">最新音乐</Link></li>
      </ul>
    </nav>
    )
  };
}

export default Nav;