import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SliderList from '../components/Contains/SliderList';
import NewSong from '../components/Contains/NewSong';
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
          <NewSong />
          <Recommend />
        </div>
      )
    }
}

export default HomePage;