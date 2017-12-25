import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Nav extends Component {
  render(){
    return(
    <nav>
      <ul>
        <li><Link to="/">个性推荐</Link></li>
      </ul>
    </nav>
    )
  };
}

export default Nav;