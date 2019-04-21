import React, { PureComponent } from 'react';

class IconTop extends PureComponent {
  render() {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <g fill="none" fillRule="evenodd">
          <rect
            width="47"
            height="47"
            x=".5"
            y=".5"
            fill="#FFF"
            stroke="#000"
            strokeOpacity=".1"
            rx="4"
          />
          <g
            stroke="#A9AEB9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M15.308 22.5l8.485-8.485a1 1 0 0 1 1.414 0l8.485 8.485M24.453 15v18.788" />
          </g>
        </g>
      </svg>
    );
  }
}

export default IconTop;
