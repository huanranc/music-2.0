import React, { Component } from 'react';
import  Carousel from 'antd/lib/carousel'
import './sider.css';

class SliderList extends Component {
  constructor(props) {
    super(props);
    this.state={
      banners:[],
      imgIndex: 1
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
  prev(index,e){
    console.log(index)
    this.setState(prevState=>({
      imgIndex:index--
    }))
    console.log(index)
  }

  next(index,e){
    console.log(index)
    this.setState(prevState=>({
      imgIndex: index++
    }))
    console.log(index)
  }
  render() {
    const {banners} = this.state;
    const list=banners.length>0?
    banners.map((item,index)=> {
      return <li key={index} className={`img${index+this.state.imgIndex}`} ><img src={item.pic}/></li>
    }):'暂时无数据'
      return (
        <div className="slider">
          <div className="slider-body">
          <ul>
              {list}
              </ul>
          </div>
          <a href="javascript:;" className="prev btn" onClick={this.prev.bind(this,this.state.imgIndex)}>pref</a>
	        <a href="javascript:;" className="next btn" onClick={this.next.bind(this,this.state.imgIndex)}>next</a>
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

export default SliderList;