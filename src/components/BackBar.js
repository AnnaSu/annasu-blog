import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import media from '../utils/mediaQueries';
import { activeOnSvg } from '../utils/styleUtils';
import { THEME_COLOR } from '../constants/themes';
import COLOR from '../constants/colors';
import ShareLinks from './ShareLinks';
import IconBack from './Icons/Back';

const Wrap = styled.div`
  display: none;
  ${media.mobile`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    border-top: 1px solid ${COLOR.LIGHT_GRAY};
    background-color: ${COLOR.WHITE};
  `};
`;

const Back = styled(Link)`
  display: inline-block;
  padding: 10px;
  ${props => activeOnSvg(props.color)};
  svg {
    padding: 5px;
  }
`;

class BackBar extends PureComponent {
  static defaultProps = {
    category: 'tech',
    title: '',
    url: '',
    hashTags: '',
  };
  render() {
    const { category, title, url, hashTags } = this.props;
    const themeColor = THEME_COLOR[category];
    return (
      <Wrap>
        <Back to={`/${category}`} color={themeColor}>
          <IconBack />
        </Back>
        <ShareLinks title={title} url={url} hashTags={hashTags} />
      </Wrap>
    );
  }
}

export default BackBar;
