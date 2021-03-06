import React, { Component } from 'react';
import styled from 'styled-components';
import { ellipsis } from 'polished';
import { Link } from 'gatsby';
import moment from 'moment';
import Image from 'gatsby-image';
import COLOR from '../constants/colors';
import { limitLine } from '../utils/styleUtils';
import { THEME_COLOR } from '../constants/themes';
import media from '../utils/mediaQueries';

const Card = styled.li`
  width: 700px;
  margin-bottom: 20px;
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

const Date = styled.p`
  margin-top: 20px;
  padding: 0 20px;
  font-size: 14px;
  color: ${COLOR.GRAY};
`;

const Title = styled.h2`
  ${ellipsis('650px')};
  padding: 0 15px;
  font-size: 18px;
  border-left: 4px solid ${props => props.color};
`;

const Desc = styled.p`
  ${limitLine('650px', 16, 2, 2)};
  margin-top: 0px;
  padding: 0 20px;
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
          {cover && <Image fluid={cover} />}
          <Date>{date && moment(date).format('MMM.DD.YYYY')}</Date>
          <Title color={color}>{title}</Title>
          <Desc>{desc}</Desc>
        </CardLink>
      </Card>
    );
  }
}

export default PostCard;
