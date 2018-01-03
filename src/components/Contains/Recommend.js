import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

// const style = {
//   show :{
//     width: '100%',
//     height: 'auto',
//     margin: '0',
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     color: '#fff',
//     fontSize: '.5rem',
//     background: 'rgba(0, 0, 0,.5)',
//     padding: '.25rem',
//     display: 'inline-block'
//   }
// }

class Recommend extends Component {
  constructor() {
    super(...arguments);
    this.state={
      result:[],
      show: 'none'
    }
  }
  componentDidMount() {
    var myFetchOptions ={
      method:'GET'
    };
    fetch("/personalized?offset=0&limit=14",myFetchOptions)
    .then(response => response.json())
    .then(json => 
      this.setState({result:json.result}));
  };
  showhandle= (key) => {
    this.setState({
      show: 'block'
    })
  }
  nonehandle= () => {
    this.setState({
      show: 'none'
    })
  }
  render() {
    const {result} = this.state;
    const resultList=result.length ?
    result.map((newSong,index) => {
       return <li key={index} className="play-list" onMouseOver={ this.showhandle }  onMouseOut= { this.nonehandle}>
       <Link to={`/playlist/${newSong.id}`}>
          <div className="card">
            <div className="card-image image">
              <div className="show" style={{display:this.state.show}}>{newSong.copywriter}</div>
              <img alt="example" width="100%" src={newSong.picUrl} />
            </div>
            <div  className="card-body">
              <p>{newSong.name}</p>
            </div>
          </div>
          </Link>
        </li>
    })
    :'没有数据'
    ;
    return(
      <div className="recommend">
          <h2 className="title">
          推荐歌单
          <Link to={`/discover/playlist`}><span className="more">>>>更多</span></Link>
          </h2>
          <ul className="card-row">{resultList}</ul>
      </div>
    )
   }
}

export default Recommend;