import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Datails extends Component {
  constructor(props) {
    super(props);
    this.state={newSong:[]}
  }
  componentDidMount() {
    var myFetchOptions ={
      method:'GET'
    };
    fetch("/album?id=36875684",myFetchOptions)
    .then(response => response.json())
    .then(json => {
      this.setState({newSong:json.songs})}
  );
  };
  render() {
    const {newSong,al} = this.state;
    console.log(newSong)
    const songslist=newSong.length ?
    newSong.map((songs,index) => {
       return <li key={index} className="song-list">
       <Link to={`single/${songs.id}`}>
          {songs.name}
          </Link>
        </li>
    }):'暂时没有数据';
      return (
        <div className="detailAblum-content">
          <div className="detailAblum-img">
            <img  alt="example" src={
              newSong.length>0?newSong[newSong.length-1].al.picUrl:'/'}
              />
          </div>
          <ul className="detailAblum-songlist">{songslist}</ul>
        </div>
      )
    }
}

export default Datails;