import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SliderList from '../components/Contains/SliderList';
import Recommend from '../components/Contains/Recommend';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let index=6;
      return (
        <div className="content-layout">
          <SliderList/>
          <Recommend />
        </div>
      )
    }
}

export default HomePage;