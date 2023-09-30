import React from "react";

export const NextArrow = ({ width = 25, height = 53 }) => {
  return (
    <svg
      id="Next_Arrow"
      data-name="Group 22400"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        id="Rectangle_899"
        data-name="Rectangle 899"
        d="M4,0H25a0,0,0,0,1,0,0V53a0,0,0,0,1,0,0H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z"
        fill="#153162"
      />
      <path
        id="dropdown"
        d="M10,0A1.816,1.816,0,0,0,8.6.6l-8,8a1.933,1.933,0,0,0,0,2.8,1.933,1.933,0,0,0,2.8,0L10,4.8l6.6,6.6a1.98,1.98,0,0,0,2.8-2.8l-8-8A1.816,1.816,0,0,0,10,0Z"
        transform="translate(17.999 16) rotate(90)"
      />
    </svg>
  );
};

export const BackArrow = ({ width = 25, height = 53 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <g
        id="Back_Arrow"
        data-name="Group 679"
        transform="translate(-491.374 -715.348)"
      >
        <path
          id="Rectangle_899"
          data-name="Rectangle 899"
          d="M4,0H25a0,0,0,0,1,0,0V53a0,0,0,0,1,0,0H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z"
          transform="translate(516.374 768.348) rotate(180)"
          fill="#153162"
        />
        <path
          id="dropdown"
          d="M10,12a1.816,1.816,0,0,1-1.4-.6l-8-8A1.933,1.933,0,0,1,.6.6,1.933,1.933,0,0,1,3.4.6L10,7.2,16.6.6a1.933,1.933,0,0,1,2.8,0,1.933,1.933,0,0,1,0,2.8l-8,8A1.816,1.816,0,0,1,10,12Z"
          transform="translate(510.375 731.348) rotate(90)"
        />
      </g>
    </svg>
  );
};
