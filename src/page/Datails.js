import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {songs} from '../mock/ablum_36941070';

class Datails extends Component {
  render() {
    let songslist=null;
    songslist=songs.map((songs) => {
       return <li key={songs.id} className="song-list">
       <Link to={`single/${songs.id}`}>
          {songs.name}
          </Link>
        </li>
    });
      return (
        <div className="content-layout">
          <ul className="card-row">{songslist}</ul>
        </div>
      )
    }
}

export default Datails;