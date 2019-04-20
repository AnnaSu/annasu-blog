import React, { Component } from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import media from '../utils/mediaQueries';
import * as R from 'ramda';

const Cards = styled.ul`
  width: 700px;
  margin: 50px auto 0;
  padding: 0;
  list-style: none;
  ${media.mobile`
    width: 100%;
    margin-top: 30px;
  `};
`;

class PostCardList extends Component {
  static defaultProps = {
    articles: [],
    category: '',
  };
  render() {
    const {
      articles,
      category,
    } = this.props;
    return (
      <Cards>
        {articles.map((item, index) => (
          <PostCard
            key={R.path(['node', 'fields', 'slug'], item)}
            slug={R.path(['node', 'fields', 'slug'], item)}
            cover={R.path(['node', 'frontmatter', 'cover'], item)}
            date={R.path(['node', 'frontmatter', 'date'], item)}
            title={R.path(['node', 'frontmatter', 'title'], item)}
            desc={R.path(['node', 'frontmatter', 'description'], item)}
            category={category}
          />
        ))}
      </Cards>
    );
  }
}

export default PostCardList;
