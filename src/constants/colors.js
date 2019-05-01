import { lighten, darken } from 'polished';

const COLOR = {
  PRIMARY_FONT: '#000',
  DESC_FONT: '#464646',
  PRIMARY_BLUE: '#61c8e0',
  PRIMARY_PINK: '#ffa48f',
  PRIMARY_GREEN: '#72e5c5',
  PRIMARY_RED: '#ea7d73',
  PRIMARY_LIGHT_BLUE: lighten(0.3, '#61c8e0'),
  PRIMARY_LIGHT_PINK: lighten(0.2, '#ffa48f'),
  PRIMARY_LIGHT_GREEN: lighten(0.2, '#72e5c5'),
  PRIMARY_LIGHT_RED: lighten(0.2, '#ea7d73'),
  LOADING_PLACEHOLDER_BG: '#f6f7f8',
  FB: '#3b579d',
  TWITTIR: '#1DA1F2',
  WHITE: '#fff',
  DEFAULT_BG: '#f3f6f7',
  LIGHT_GRAY: darken(0.1, '#fff'),
  SILVER: darken(0.2, '#fff'),
  GRAY: darken(0.4, '#fff'),
  SMOKE: '#eee',
  GAINSBORO: '#ddd',
};

export default COLOR;
