import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import SliderList from '../components/Contains/SliderList';
import NewSong from '../components/Contains/NewSong';
import Recommend from '../components/Contains/Recommend';
import Exclusive from '../components/Contains/exclusive';

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
          <NewSong />
          <Exclusive />
        </div>
      )
    }
}

export default HomePage;