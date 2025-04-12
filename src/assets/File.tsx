import React from "react";

const File = ({
  background,
  stroke,
}: {
  background: string;
  stroke: string;
}) => {
  return (
    <svg
      width="199"
      height="184"
      viewBox="0 0 199 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_1504)">
        <path
          d="M113.718 31.5517C119.985 31.5517 125.589 27.6517 127.766 21.7759C129.944 15.9 135.548 12 141.815 12L163 12C171.837 12 179 19.1634 179 28V140C179 148.837 171.837 156 163 156H36.6406C27.8041 156 20.6406 148.837 20.6406 140L20.6406 47.5517C20.6406 38.7152 27.8041 31.5517 36.6406 31.5517L113.718 31.5517Z"
          fill={background}
        />
        <path
          d="M113.718 32.0517C120.194 32.0517 125.985 28.0216 128.235 21.9496C130.34 16.2698 135.757 12.5 141.815 12.5H163C171.561 12.5 178.5 19.4396 178.5 28V140C178.5 148.56 171.561 155.5 163 155.5H36.6406C28.0802 155.5 21.1406 148.56 21.1406 140V47.5517C21.1406 38.9913 28.0802 32.0517 36.6406 32.0517L113.718 32.0517Z"
          stroke={stroke}
        />
      </g>

      <defs>
        <filter
          id="filter0_d_1_1504"
          x="0.640625"
          y="0"
          width="198.359"
          height="184"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.54902 0 0 0 0 1 0 0 0 0 0.270588 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1504"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1504"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default File;
