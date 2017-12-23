import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import List from '../components/Contains/List'
import '../commpon/songlist.css'

class SongList extends Component {
  constructor() {
    super();
    this.state={
      album:[],
      artist:[],
      alias:[]
      }
  }
  componentDidMount() {
    var myFetchOptions ={
      method:'GET'
    };
    fetch("/album?id="+this.props.match.params.id ,myFetchOptions)
    .then(response => response.json())
    .then(json => {
      this.setState({
        album:json.album,
        artist:json.album.artist,
        alias:json.album.alias
      })}
  );
  }

  render() {
    const {alias,album,artist} = this.state;
    console.log(artist)
    console.log(alias)
    return(
      <div className="new-ablum">
        <div className="ablum-theme">
          <img  className="ablum-img" alt="ablum-img" src={
            album.blurPicUrl}
          />
          <div className="ablum-title">
            <h2>{alias.length==0?album.name:`${album.name}（${alias}）`}</h2>
            <p>
              <span className="artist">
                <Link to={`artist/${artist.id}`}>
                  {artist.name}
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="list">
          <List id={this.props.match.params.id}/>
        </div>
      </div>
    )
    }
}

export default SongList;