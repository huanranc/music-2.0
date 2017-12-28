import React, { Component } from 'react';
import './sider.css'

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state={
      banners:[]
    }
  }
  componentDidMount() {
    let that=this;
    var myFetchOptions ={
      method:'GET'
    };
    fetch("/banner",myFetchOptions)
    .then(response => response.json())
    .then(json => {
      that.setState({
        banners:json.banners
      })}
  );
  };
  render() {
    const {banners} = this.state;
    console.log(banners)
    console.log(banners.pic)
    const list=banners.length>0?
    banners.map((item,index)=> {
      return <li key={index}><img src={item.pic}/></li>
    }):'暂时无数据'
      return (
        <div className="slider">
          <ul className="slider-body">
            {list}
          </ul>
        </div>
      )
    }
}

export default Slider;