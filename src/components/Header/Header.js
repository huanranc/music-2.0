import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/button';
import './header.css';
const ButtonGroup = Button.Group;

class Header extends Component {
  render(){
    return(
      <header className="wrap-header">
        <ButtonGroup>
          <Button icon="left" />
          <Button icon="right" />
        </ButtonGroup>
        <input type="text" />
      </header>
    );
  };
}

export default Header;