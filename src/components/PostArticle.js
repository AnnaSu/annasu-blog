import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import COLOR from '../constants/colors';
import { THEME_LIGHT_COLOR } from '../constants/themes';
import Tags from './Tags';
import media from '../utils/mediaQueries';
import ShareLinks from './ShareLinks';

const Wrap = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 55px 0;
  background-color: ${COLOR.WHITE};
  ${media.mobile`
    margin-top: 30px;
    padding: 30px 0;
  `};
`;

const Article = styled.article`
  width: 700px;
  margin: 0 auto;
  ${media.mobile`
    width: 100%;
  `};
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  padding: 0 15px;
  font-size: 24px;
  line-height: 1.5;
  border-left: 4px solid ${props => props.color};
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.span`
  padding-left: 15px;
  font-size: 14px;
  color: ${COLOR.GRAY};
`;

const Content = styled.div`
  margin: 30px 0;
  padding: 0 15px;
  line-height: 28px;

  a {
    text-decoration: none;
    border-bottom: 1px solid ${props => props.color};
    color: ${props => props.color};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;

    thead {
      tr {
        border-bottom: 3px solid ${props => props.color};
      }
      th {
        padding: 0.5em 1em;
      }
    }

    tbody {
      tr:nth-child(odd) {
        td {
          background-color: ${props => THEME_LIGHT_COLOR[props.category]};
        }
      }
    }

    td {
      padding: 0.5em 1em;
    }
  }

  strong {
    font-weight: 700;
  }

  hr {
    display: block;
    height: 1px;
    margin: 1em 0;
    padding: 0;
    border: 0;
    border-top: 1px solid ${COLOR.SILVER};
  }

  blockquote {
    margin: 0;
    padding: 15px;
    border: 2px solid ${props => props.color};
    text-align: center;
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      &::before {
        content: '•';
        padding-right: 15px;
        color: ${props => props.color};
      }

      li {
        &::before {
          content: '◦';
          margin-left: 24px;
        }

        li {
          &::before {
            content: '▪';
            margin-left: 48px;
          }
        }
      }
    }
  }

  ol {
    padding: 0;
    list-style: none;
    counter-reset: li;

    li {
      counter-increment: li;

      &::before {
        content: counter(li) '.';
        padding-right: 15px;
        color: ${props => props.color};
      }
    }
  }

  p > code {
    padding: 5px;
    background-color: ${COLOR.LIGHT_GRAY};
  }
`;

class PostArticle extends Component {
  static defaultProps = {
    title: '',
    date: '',
    html: '',
    tags: [],
    color: '',
    category: '',
    url: '',
    hashtags: '',
  };

  render() {
    const {
      title,
      date,
      url,
      hashtags,
      html,
      tags,
      color,
      category,
    } = this.props;

    return (
      <Wrap>
        <Article>
          <Title color={color}>{title}</Title>
          <Infos>
            <Date>{date && moment(date).format('MMM.DD.YYYY')}</Date>
            <ShareLinks
              showWithMobile={false}
              title={title}
              url={url}
              hashtags={hashtags}
            />
          </Infos>
          <Content
            color={color}
            category={category}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Tags tags={tags} color={color} category={category} />
        </Article>
      </Wrap>
    );
  }
}

export default PostArticle;
