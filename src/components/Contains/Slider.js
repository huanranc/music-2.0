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
      return <li key={index} className={`img${index+1}`} ><img src={item.pic}/></li>
    }):'暂时无数据'
      return (
        <div className="slider">
          <div className="slider-body">
            <ul>
              {list}
            </ul>
          </div>
          <a href="javascript:;" className="prev btn">pref</a>
	        <a href="javascript:;" className="next btn">next</a>
          <ul className="dots">
            <li className="dot dot-active"><a href="#">1</a></li>
            <li className="dot"><a href="#">2</a></li>
            <li className="dot"><a href="#">3</a></li>
            <li className="dot"><a href="#">4</a></li>
            <li className="dot"><a href="#">5</a></li>
            <li className="dot"><a href="#">6</a></li>
          </ul>
        </div>
      )
    }
}

export default Slider;