import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {newSong} from '../mock/newSong';

class NewAblum extends Component {
  render() {
    let newSongs=null;
    newSongs=newSong.map((newSong) => {
       return <li key={newSong.id} className="song-list">
       <Link to={`datails/${newSong.id}`}>
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
    });
      return (
        <div className="content-layout">
          <h2>新碟上架</h2>
          <ul className="card-row">{newSongs}</ul>
        </div>
      )
    }
}

export default NewAblum;