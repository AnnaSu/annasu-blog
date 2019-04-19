import React, { PureComponent } from 'react';

class Back extends PureComponent {
  render() {
    return (
      <svg width="36" height="36">
        <g fill="#A9AEB9" fillRule="evenodd">
          <rect
            width="12"
            height="2"
            x="1.95"
            y="14.607"
            rx="1"
            transform="rotate(45 7.95 15.607)"
          />
          <rect
            width="12"
            height="2"
            x="1.95"
            y="7.536"
            rx="1"
            transform="rotate(-45 7.95 8.536)"
          />
          <rect width="16" height="2" x="5" y="11" rx="1" />
        </g>
      </svg>
    );
  }
}

export default Back;
