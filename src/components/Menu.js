import React, { Component } from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors';
import media from '../utils/mediaQueries';
import { Link } from 'gatsby';

const MenuItems = styled.ul`
  display: flex;
  margin: 0 300px;
  width: 700px;
  height: 100px;
  line-height: 120px;
  padding: 0;
  list-style: none;
  ${media.mobile`
    position: ${props => (props.fixed ? 'fixed' : 'absolute')};
    top: ${props => (props.fixed ? '0' : '50px')};
    z-index: ${props => (props.fixed ? 1 : 0)};
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    background-color: ${COLOR.WHITE};
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid ${COLOR.LIGHT_GRAY};
    box-shadow: 0 3px 8px ${COLOR.LIGHT_GRAY};
  `};
`;

const MenuItem = styled.li`
  width: 90px;
  margin-right: 20px;
  text-align: center;
  font-size: 18px;
  border-bottom: none;

  .tech,
  .life,
  .about {
    border-bottom-width: 5px;
    border-bottom-style: solid;
    opacity: 1;
  }

  .tech {
    border-color: ${COLOR.PRIMARY_BLUE};
  }

  .life {
    border-color: ${COLOR.PRIMARY_PINK};
  }

  .about {
    border-color: ${COLOR.PRIMARY_GREEN};
  }
  ${media.mobile`
    width: 33.33%;
    width: calc(100% / 3);
    margin-right: 0;
  `};
`;

const MenuLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100px;
  opacity: 0.4;
  text-decoration: none;
  color: ${COLOR.PRIMARY_FONT};
  ${media.mobile`
    height: 50px;
  `};
`;

class Menu extends Component {
  state = {
    fixed: false,
  };

  componentDidMount() {
    // const { scroll$ } = this.props;
    // scroll$.subscribe(x => {
    //   if (!this.state.fixed && x >= 50) {
    //     this.setState({
    //       fixed: true,
    //     });
    //   } else if (this.state.fixed && x < 50){
    //     this.setState({
    //       fixed: false,
    //     });
    //   }
    // });
  }

  render() {
    const { fixed } = this.state;
    return (
      <MenuItems fixed={fixed}>
        <MenuItem>
          <MenuLink to="/" activeClassName="about">
            Me
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/tech" activeClassName="tech" partiallyActive>
            Tech
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/life" activeClassName="life" partiallyActive>
            Life
          </MenuLink>
        </MenuItem>
      </MenuItems>
    );
  }
}

export default Menu;
