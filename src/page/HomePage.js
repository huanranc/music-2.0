import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Slider from '../components/Contains/Slider'

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div className="content-layout">
          个性推荐
          <Slider/>
        </div>
      )
    }
}

export default HomePage;