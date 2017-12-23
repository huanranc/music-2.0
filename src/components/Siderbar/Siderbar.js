import React, { Component } from 'react';
import {
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
            <li><Link to="/"><i className="fa fa-music fa-lg"></i>推荐音乐</Link></li>
            <li><Link to="/about"><i className="fa fa-bar-chart fa-lg"></i>榜单</Link></li>
            <li><Link to="/topics"><i className="fa fa-music fa-lg"></i>聆听FM</Link></li>
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