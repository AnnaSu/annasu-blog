import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import COLOR from '../constants/colors';
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
      ContentComponent,
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
          <ContentComponent color={color} category={category} html={html} />
          <Tags tags={tags} color={color} category={category} />
        </Article>
      </Wrap>
    );
  }
}

export default PostArticle;
