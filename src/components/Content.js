import * as React from 'react';
import styled from 'styled-components';
import COLOR from '../constants/colors.js';
import { THEME_LIGHT_COLOR } from '../constants/themes.js';

const StyledContent = styled.div`
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

      p {
        display: inline;
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

      p {
        display: inline;
      }
    }
  }

  p > code {
    padding: 5px;
    background-color: ${COLOR.LIGHT_GRAY};
  }
`;


export const HTMLContent = ({ html, ...rest }) => <StyledContent {...rest} dangerouslySetInnerHTML={{ __html: html }} />

export const Content = ({ html = '', ...rest }) => <StyledContent {...rest}>{html}</StyledContent>;
