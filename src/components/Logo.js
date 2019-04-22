import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import media from '../utils/mediaQueries';

const LogoWithLink = styled(Link)`
  position: absolute;
  top: 23px;
  left: 60px;
  width: 150px;
  height: 45px;
  background-image: url(${props => props.logo});
  background-size: 150px 45px;
  ${media.mobile`
    top: 15px;
    left: 20px;
    width: 25px;
    height: 25px;
    background-image: url("/img/logo.png");
    background-size: 25px 25px;
  `};
`;

class Logo extends Component {
  render() {
    return <LogoWithLink to="/" logo="/img/logo_tech.svg" />;
  }
}

export default Logo;
