import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Avatar from 'antd/lib/avatar';
import Icon from 'antd/lib/icon';
import './siderbar.css';

class Siderbar extends Component {
  render(){
    return(
      <div className="siderbar ">
      <div className="person-login">
      <span>
         <Avatar icon="user" />
      </span>
      <span className="login">未登录 <Icon type="down" /></span>
      </div>
        <div className="sider-item">
          <h3>发现</h3>
          <ul>
            <li><Link to="/"><i className="fa fa-music fa-lg"></i>最新音乐</Link></li>
            <li><Link to="/about"><i className="fa fa-bar-chart fa-lg"></i>排行榜</Link></li>
            <li><Link to="/topics"><i className="fa fa-music fa-lg"></i>无线电台</Link></li>
          </ul>
        </div>
        <div className="sider-item">
        <h3>我的音乐</h3>
        <ul>
          <li><Link to="/"><i className="fa fa-music fa-lg"></i>喜欢的音乐</Link></li>
          <li><Link to="/about"><i className="fa fa-bar-chart fa-lg"></i>本地音乐</Link></li>
        </ul>
      </div>
      </div>
    );
  };
}

export default Siderbar;