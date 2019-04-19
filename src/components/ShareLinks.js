import React, { PureComponent } from 'react';
import styled from 'styled-components';
import media from '../utils/mediaQueries';
import { activeOnSvg } from '../utils/styleUtils';
import COLOR from '../constants/colors';
import IconFb from './Icons/FB';
import IconTwitter from './Icons/Twitter';

const Links = styled.div`
  display: block;
  ${props => media.mobile`
    display: ${props.showWithMobile ? 'block' : 'none'};`};
`;

const ShareFb = styled.a.attrs({
  href: props => `https://www.facebook.com/sharer/sharer.php?u=${props.url}`,
  target: '_blank',
})`
  display: inline-block;
  cursor: pointer;
  ${media.mobile`padding: 10px;`};
  ${activeOnSvg(COLOR.FB)};
`;

const ShareTwitter = styled.a.attrs({
  href: props =>
    `https://twitter.com/share?url=${
      props.url
    }&related=twitterapi%2Ctwitter&hashtags=${props.hashTags}&text=${
      props.title
    }`,
  target: '_blank',
})`
  display: inline-block;
  ${media.mobile`padding: 10px;`};
  ${activeOnSvg(COLOR.TWITTIR)};
`;

class ShareLinks extends PureComponent {
  static defaultProps = {
    showWithMobile: true,
    title: '',
    url: '',
    hashTags: '',
  };
  render() {
    const { showWithMobile, title, url, hashTags } = this.props;

    return (
      <Links showWithMobile={showWithMobile}>
        <ShareFb url={url}>
          <IconFb />
        </ShareFb>
        <ShareTwitter title={title} url={url} hashTags={hashTags}>
          <IconTwitter />
        </ShareTwitter>
      </Links>
    );
  }
}

export default ShareLinks;
