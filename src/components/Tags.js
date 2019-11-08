import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import COLOR from '../constants/colors';
import { kebabCase } from 'lodash';
// import scrollTop from '../utils/scrollTop';

const TagList = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 15px;
  list-style: none;
`;

const TagItem = styled.li`
  margin-right: 5px;
  border: 1px solid ${props => props.color};
  border-radius: 4px;
`;

const TagLink = styled(Link)`
  display: inline-block;
  padding: 0 10px;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.color};
  cursor: pointer;

  &:active,
  &:focus {
    color: ${COLOR.WHITE};
    background-color: ${props => props.color};
  }
`;

class Tags extends Component {
  static defaultProps = {
    tags: [],
    color: '',
  };
  render() {
    const { tags, color } = this.props;
    return (
      <TagList>
        {tags.map((tag, index) => (
          <TagItem key={tag} color={color}>
            <TagLink to={`/tags/${kebabCase(tag)}/`} color={color}>
              {tag}
            </TagLink>
          </TagItem>
        ))}
      </TagList>
    );
  }
}

export default Tags;
