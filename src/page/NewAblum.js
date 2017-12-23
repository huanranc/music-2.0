import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class NewAblum extends Component {
  constructor() {
    super(...arguments);
    this.state={songs:[]}
  }
  componentDidMount() {
    var myFetchOptions ={
      method:'GET'
    };
    fetch("/top/album?offset=0&limit=10",myFetchOptions)
    .then(response => response.json())
    .then(json => {
      this.setState({songs:json.albums})}
  );
  };

  render() {
    const {songs} = this.state;
    const songList=songs.length ?
    songs.map((newSong,index) => {
       return <li key={index} className="ablum-list">
       <Link to={`album/${newSong.id}`}>
          <div className="card">
            <div className="card-image">
              <img alt="example" width="100%" src={newSong.picUrl} />
            </div>
            <div  className="card-body">
              <h3>{newSong.name}</h3>
              <p>{newSong.artist.name}</p>
              <p>{newSong.size} song</p>
            </div>
          </div>
          </Link>
        </li>
    })
    :'没有数据'
    ;
      return (
        <div className="content-layout">
          <h2>新碟上架</h2>
          <ul className="card-row">{songList}</ul>
        </div>
      )
    }
}

export default NewAblum;