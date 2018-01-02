import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class NewSong extends Component {
  constructor() {
    super(...arguments);
    this.state={
      result:[],
      artists:[]
    }
  }
  componentDidMount() {
    var myFetchOptions ={
      method:'GET'
    };
    fetch("/personalized/newsong",myFetchOptions)
    .then(response => response.json())
    .then(json => 
      this.setState({
        result:json.result
      }));
  };
  render() {
    const {result,artists} = this.state;
    const resultList=result.length ?
    result.map((newSong,index) => {
       return <li key={index} className="play-list">
       <Link to={`/playlist/${newSong.id}`}>
          <div className="card">
            <div className="card-image">
              <img alt="example" width="100%" src={newSong.song.album.picUrl} />
            </div>
            <div  className="card-body">
              <p>{newSong.name}</p>
              <p>{newSong.song.artists[0].name}</p>
            </div>
          </div>
          </Link>
        </li>
    })
    :'没有数据'
    ;
    return(
      <div className="newSong">
          <h2 className="title">推荐新音乐</h2>
          <ul className="card-row">{resultList}</ul>
      </div>
    )
   }
}

export default NewSong;