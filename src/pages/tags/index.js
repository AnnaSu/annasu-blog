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
  display: flex;
  flex-flow: row wrap;
  width: 700px;
  margin: 30px auto;
  padding: 0;
  list-style: none;
  ${media.mobile`
    width: 100%;
  `};
`;

const Card = styled.li`
  flex: 1 auto;
  height: 40px;
  margin: 0 10px 10px;
  text-align: center;
  background-color: ${COLOR.WHITE};
  border-radius: 5px;
  border: solid 1px ${COLOR.LIGHT_GRAY};
`;

const CardLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  text-decoration: none;
  color: ${COLOR.PRIMARY_FONT};

  &:hover {
    color: ${COLOR.WHITE};
    background-color: ${THEME_COLOR['tags']}
  }
`;

const Name = styled.p`
  font-size: 14px;
  margin: 0;
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
            <Name>{`${tag.fieldValue} (${tag.totalCount})`}</Name>
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
