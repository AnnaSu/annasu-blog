import { keyframes } from 'styled-components';
import COLOR from '../constants/colors';
// eslint-disable-next-line max-len
// ref: https://stackoverflow.com/questions/6222616/with-css-use-for-overflowed-block-of-multi-lines
/**
 * @param {string} width
 * @param {number} fontSize
 * @param {number} lineHeight
 * @param {number} limitNumber
 * @return {string}
 */
export const limitLine = (width, fontSize, lineHeight, limitNumber) => {
  return `
    display: block;
    display: -webkit-box;
    max-width: ${width};
    height: ${fontSize * lineHeight * limitNumber}px;
    font-size: ${fontSize}px;
    line-height: ${lineHeight};
    -webkit-line-clamp: ${limitNumber};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};

export const activeOnSvg = color => {
  return `
    &:hover, &:focus, &:active {

      svg {
        background-color: ${color};
        border-radius: 50%;

        path, g {
          fill: white;
        }
      }
    }
  `;
};

const placeHolderShimmer = keyframes`
    from {
        background-position: -470px 0;
    }

    to {
        background-position: 470px 0;
    }
`;

export function loadingPlaceholder(width, height = '6px') {
  return `
      width: ${width};
      height: ${height};
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: ${placeHolderShimmer};
      animation-timing-function: linear;
      background: ${COLOR.LOADING_PLACEHOLDER_BG};
      background: linear-gradient(to right, ${COLOR.SMOKE} 8%, ${
  COLOR.GAINSBORO
} 18%, ${COLOR.SMOKE} 33%);
      background-size: 1000px 105px;
  `;
}
