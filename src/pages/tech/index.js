import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout.js';
import PostCardList from '../../components/PostCardList';
import PostsHelmet from '../../components/PostsHelmet';

class LifePosts extends Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { edges: posts },
      },
    } = this.props;
    return (
      <Layout>
        <PostsHelmet pathname={'/tech'} />
        <PostCardList articles={posts} category="tech" />
      </Layout>
    );
  }
}

export default LifePosts;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "tech-post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            tags
            title
            description
          }
        }
      }
    }
  }
`;
