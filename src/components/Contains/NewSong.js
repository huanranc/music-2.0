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
       return <li key={index} className="newsong-list">
          <div className="newsong-body">
            <span className="song-number">{index<9?`0${index+1}`:index+1}</span>
            <div className="newsong-image">
              <img alt="example" width="100%" src={newSong.song.album.picUrl} />
            </div>
            <div  className="newsong-text">
              <p>{newSong.name}</p>
              <p className="artists">by {newSong.song.artists[0].name}</p>
            </div>
          </div>
        </li>
    })
    :'没有数据'
    ;
    return(
      <div className="newsong">
          <h2 className="title">
          最新音乐
          <Link to={`/discover/album`}><span className="more">>>>更多</span></Link>
          </h2>
          <ul className="newsong-content">{resultList}</ul>
      </div>
    )
   }
}

export default NewSong;