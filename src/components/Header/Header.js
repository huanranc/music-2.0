import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/button';
import Input from 'antd/lib/input';
import './header.css';
const ButtonGroup = Button.Group;

class Header extends Component {
  render(){
    const Search = Input.Search;
    return(
      <header className="header">
        <ButtonGroup className="button-group">
          <Button icon="left" className="btn"/>
          <Button icon="right" className="btn"/>
        </ButtonGroup>
        <Search className="search-btn"
        placeholder="Search..."
        onSearch={value => console.log(value)}
        style={{ width: 230 }}
      />
      </header>
    );
  };
}

export default Header;