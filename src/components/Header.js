import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import COLOR from '../constants/colors';
import Logo from './Logo';

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  box-shadow: 0 3px 8px ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.WHITE};
`;

class Header extends Component {
  render() {
    // TODO: Show Search component
    return (
      <Wrap>
        <Logo />
        <Menu />
      </Wrap>
    );
  }
}

export default Header;
