import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class List extends Component {
  constructor(props) {
    super(props);
    this.state={
      newSong:[],
      album:[],
      alias:[],
      isPlay:false,
      songId:''
      }
  }
  componentDidMount() {
    let that=this;
    var myFetchOptions ={
      method:'GET'
    };
    fetch("/album?id="+this.props.id,myFetchOptions)
    .then(response => response.json())
    .then(json => {
      that.setState({
        newSong:json.songs,
        album:json.album,
        alias:json.album.alias
      })}
  );
  };

  timeDt(time) {
    let durationTime=parseInt(time/1000);
    let minute = parseInt(durationTime/60);
    let second = durationTime%60+'';
    let symbol = ':';
    if(minute == 0){
        minute = '00';
    }else if(minute < 10 ){
        minute = '0'+minute;
    }
    if(second.length == 1){
      second = '0'+second;
    }
    return minute+symbol+second
  }


  handleSong(id,e){
    e.preventDefault();
    this.setState({
      songId:id
    })
    alert(id);
  }

 Song(id){
    return id;
  }

  render() {
    console.log(this.state.songId)
    const {newSong,album,alias} = this.state;
    const songslist=newSong.length ?
    newSong.map((songs,index) => {
       return <li key={index}
      >
       <span className="song-number">{
        index<9?`0${index+1}`:index+1
      } </span>

          <span className="song-name">
          {
            alias.length==0?
            <span className="song-name-txt">
            {songs.name}
            </span>:
            <span className="song-name-txt">
              {songs.name}
              <span className="alias">（{alias}）</span>
            </span>
            }
            <a onClick={this.handleSong.bind(this,this.Song(songs.id))}>play</a>
          </span>
          <span className="song-art-name">
            <Link to={`artist/${album.artist.id}`}>
              {album.artist.name}
            </Link>
          </span>
          <span className="song-al-name">{songs.al.name}</span>
          <span className="song-dt">{this.timeDt(songs.dt)}</span>
        </li>
    }):'暂时没有数据';
      return (
          <div className="song-list">
              <ul className="songlist">
              <li> 
                <span className="song-name title">歌曲</span>
                <span className="song-art-name title">歌手</span>
                <span className="song-al-name title">专辑名</span>
                <span className="song-dt title">时长</span>
              </li>
              {songslist}
              </ul>
          </div>
      )
    }
}

export default List;