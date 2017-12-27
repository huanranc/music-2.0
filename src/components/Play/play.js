import React, { Component } from 'react';
import Icon from 'antd/lib/icon';
import Avatar from 'antd/lib/avatar';
import './play.css';

class Play extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPlay: false,
      currentTime: 0,
      duration:0,
      progress:0,
      volume: 80 + '%'
    }
    this.handlePlayerClick = this.handlePlayerClick.bind(this);
    this.timeStart = this.timeStart.bind(this);
    this.controlAudio= this.controlAudio.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
  }

componentDillMount(){
  let audioplay = this.refs.audioplay;
}

timeStart(time) {
  let durationTime=parseInt(time);
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


controlAudio(){
  this.setState({
    duration:this.refs.audioplay.duration,
    currentTime:this.refs.audioplay.currentTime,
    progress:this.state.currentTime / this.state.duration * 100 + '%'
  });
}

handlePlayerClick() {
  this.setState(prevState=>({
    isPlay:!prevState.isPlay,
    //duration:this.audioplay.duration
  }));
  if(!this.state.isPlay) {
    this.refs.audioplay.play();
    }else {
      this.refs.audioplay.pause();
    }
}

handleProgress(e){
let settedProgress = (e.screenX - this.refs.propgressBar.getBoundingClientRect().left) / this.refs.propgressBar.clientWidth;
 console.log(settedProgress);
 console.log(this.refs.audioplay.currentTime);
 console.log(this.refs.audioplay.duration);
 console.log(settedProgress*this.refs.audioplay.duration);
this.onProgress&&this.onProgress(settedProgress);
}
  render(){
    return(
      <div className="play">
        <audio id="audio" preload="true"  onTimeUpdate={ this.controlAudio}  ref="audioplay">
          您的浏览器不支持 audio 与元素。
        </audio>
        <a className="singer-icon"><span className="icon-text">singer</span></a>
        <div className="play-control">
            <a href="javascript:void(0)" className="prev-btn"><span className="icon-text">prev</span></a>
            {
              this.state.isPlay? 
              <a  className="stop-btn" onClick={this.handlePlayerClick} ><span className="icon-text">stop</span></a>
              :
              <a  className="play-btn" onClick={this.handlePlayerClick} ><span className="icon-text">stop</span></a>
            }
            <a href="javascript:void(0)" className="next-btn"><span className="icon-text">next</span></a>
        </div>
        <span style={{ fontSize: 12, color: '#fff' }}>{this.timeStart(this.state.currentTime)}</span>
        <div className="play-progress" onClick={this.handleProgress} ref="propgressBar"  onClick={this.timer}>
          <div className="progress-nav" style={{ width: this.state.progress }}></div>
        </div>
        <span style={{ fontSize: 12, color: '#fff' }}>{this.timeStart(this.state.duration)}</span>
        <div className="volume-progress">
           <Icon type="sound" style={{ fontSize: 20, color: '#fff' }} />
           <div className="play-progress">
              <div className="progress-nav" style={{ width: this.state.volume }}></div>
         </div>
        </div>
      </div>
    );
  }
}

export default Play;