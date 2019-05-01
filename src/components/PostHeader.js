import React, { PureComponent } from 'react';
import styled from 'styled-components';
import IconTag from './Icons/Tag';
import { THEME_COLOR } from '../constants/themes';
import media from '../utils/mediaQueries';

const Wrap = styled.div`
  width: 700px;
  margin: 10px auto -30px;
  ${media.mobile`
    width: auto;
    margin: 15px 10px -30px;`};
`;

const Icon = styled.div`
  display: inline-block;
  vertical-align: sub;

  svg g {
    fill: ${props => props.color};
  }
`;

const Name = styled.h1`
  display: inline-block;
  margin-left: 5px;
  letter-spacing: 1px;
  font-size: 24px;
  font-weight: 500;
`;

class PostHeader extends PureComponent {
  static defaultProps = {
    name: '',
    category: '',
  };
  render() {
    const { name, category } = this.props;
    const color = THEME_COLOR[category];
    return (
      <Wrap>
        <Icon color={color}>
          <IconTag />
        </Icon>
        <Name>{name}</Name>
      </Wrap>
    );
  }
}

export default PostHeader;
