import React from 'react';

const DEFAULT_STYLES = {
  width: '28px',
  height: '24px',
  stroke: '#000000',
  fill: 'none',
};

const SvgMinusIcon = props => (
  <svg
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
    data-name="minus-icon-svg"
    xmlns="http://www.w3.org/2000/svg"
    {...DEFAULT_STYLES}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
export default SvgMinusIcon;
