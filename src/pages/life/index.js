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
        <PostsHelmet pathname={'/life'} />
        <PostCardList articles={posts} category="life" />
      </Layout>
    );
  }
}

export default LifePosts;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "life-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
