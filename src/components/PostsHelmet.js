import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { CLIENT_ENDPOINT } from '../constants/endpoints';
// TODO: add JSON-LD, https://schema.org/BlogPosting
const pageInfo = {
  title: 'Anna Su notes',
  description: '文章列表',
};

class PostsHelmet extends PureComponent {
  static defaultProps = {
    pathname: '',
  };
  render() {
    const { pathname } = this.props;
    const url = CLIENT_ENDPOINT + pathname;
    return (
      <Helmet>
        <title>{pageInfo.title}</title>
        <meta name="description" content={pageInfo.description} />
        <meta property="og:title" content={pageInfo.title} />
        <meta property="og:description" content={pageInfo.description} />
        <meta property="og:url" content={url} />
      </Helmet>
    );
  }
}

export default PostsHelmet;
