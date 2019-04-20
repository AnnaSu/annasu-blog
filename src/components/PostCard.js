import React, { Component } from 'react';
import styled from 'styled-components';
import { ellipsis } from 'polished';
import { Link } from 'gatsby';
import moment from 'moment';
import COLOR from '../constants/colors';
import { limitLine } from '../utils/styleUtils';
import { THEME_COLOR } from '../constants/themes';
import media from '../utils/mediaQueries';

const Card = styled.li`
  width: 700px;
  margin-bottom: 50px;
  background-color: ${COLOR.WHITE};
  border: solid 1px ${COLOR.LIGHT_GRAY};
  ${media.mobile`
    width: auto;
    margin: 0 10px 20px;
  `};
`;

const CardLink = styled(Link)`
  display: grid;
  text-decoration: none;
  color: ${COLOR.PRIMARY_FONT};
`;

const Cover = styled.img.attrs({
  src: props => props.src,
})`
  display: inline-block;
  width: 700px;
  height: 240px;
  border: 0;
  object-fit: cover;
  background-color: ${props => props.color};
  background-image: url('/img/icon-image.svg');
  background-size: 60px 60px;
  background-repeat: no-repeat;
  background-position: center center;

  ${media.mobile`
    width: 100%;
  `};
`;

const Date = styled.p`
  margin: 0;
  padding-top: 40px;
  padding-left: 20px;
  font-size: 14px;
  color: ${COLOR.GRAY};
`;

const Title = styled.h1`
  ${ellipsis('650px')};
  padding-left: 15px;
  font-size: 18px;
  border-left: 4px solid ${props => props.color};
`;

const Desc = styled.p`
  ${limitLine('650px', 16, 2, 2)};
  padding-left: 20px;
`;

class PostCard extends Component {
  static defaultProps = {
    id: '',
    cover: '',
    date: '',
    title: '',
    desc: '',
    slug: '',
  };

  render() {
    const { cover, date, title, desc, slug, category } = this.props;
    const color = THEME_COLOR[category];

    return (
      <Card>
        <CardLink to={slug}>
          {cover && <Cover src={cover} color={color} alt="" />}
          <Date>{date && moment(date).format('MMM.DD.YYYY')}</Date>
          <Title color={color}>{title}</Title>
          <Desc>{desc}</Desc>
        </CardLink>
      </Card>
    );
  }
}

export default PostCard;
