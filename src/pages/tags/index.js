import React from 'react';
import styled from 'styled-components';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import COLOR from '../../constants/colors';
import { THEME_COLOR } from '../../constants/themes';
import Layout from '../../components/Layout';
import PostHeader from '../../components/PostHeader';
import media from '../../utils/mediaQueries';

const Cards = styled.ul`
  width: 700px;
  margin: 30px auto;
  padding: 0;
  list-style: none;

  ${media.mobile`
    width: 100%;
  `};
`;

const Card = styled.li`
  display: inline-block;
  height: 80px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${COLOR.WHITE};
  border: solid 1px ${COLOR.LIGHT_GRAY};

  ${media.mobile`
    margin: 0 5px 10px;
  `};
`;

const CardLink = styled(Link)`
  position: relative;
  width: 100%;
  height: 80px;
  min-width: 100px;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: ${COLOR.PRIMARY_FONT};

  &:hover {
    &::after {
      display: block;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    display: none;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 20px 0 0;
    border-color: white ${COLOR.PRIMARY_DARK_GREEN};
  }

  &:hover, &:active {
    background-color: ${THEME_COLOR['tags']};

    > p {
      color: ${COLOR.PRIMARY_DARK_GREEN};
    }
  }
`;

const Name = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const Count = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: ${COLOR.GRAY};
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${title}`} />
    <PostHeader name="Tags" category="tags" />
    <Cards>
      {group.map((tag, index) => (
        <Card key={tag.fieldValue}>
          <CardLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            <Name>{tag.fieldValue}</Name>
            <Count>{`${tag.totalCount} posts`}</Count>
          </CardLink>
        </Card>
      ))}
    </Cards>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
