import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Exclusive extends Component {
  constructor() {
    super(...arguments);
    this.state={
      result:[]
    }
  }
  componentDidMount() {
    var myFetchOptions ={
      method:'GET'
    };
    fetch("/personalized/privatecontent",myFetchOptions)
    .then(response => response.json())
    .then(json => 
      this.setState({
        result:json.result
      }));
  };
  render() {
    const {result} = this.state;
    console.log(result)
    const resultList=result.length ?
    result.map((song,index) => {
       return <li key={index} className="exclusive-list">
          <div className="exclusive-img">
            <img  width="100%"  src={song.picUrl} />
          </div>
          <span className="exclusive-text">{song.name}</span>
      </li>
    })
    :'没有数据'
    ;
    return(
      <div className="exclusive">
          <h2>
          独家放送
          </h2>
          <ul className="exclusive-body">{resultList}</ul>
      </div>
    )
   }
}

export default Exclusive;