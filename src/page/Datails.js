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
       return <li key={index}>
       <Link to={`single/${songs.id}`}>
          <span>{
            index<9?`0${index+1}`:index+1
          } </span>{songs.name}
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
          <div className="detailAblum-songlist">
              <div className="songlist-title">
                <h2>Merry & Happy</h2>
                <p>
                <span>歌手：</span>
                <span>TWICE</span>
                <span> 时间：</span>
                <span>2017-12-11</span>
                </p>
              </div>
              <div className="song-control">
                <i className="fa fa-play-circle fa-2x"></i>
                <button className="save-btn">SAVED</button>
              </div>
              <ul className="songlist">
              {songslist}
              </ul>
          </div>
        </div>
      )
    }
}

export default Datails;