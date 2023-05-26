import React from "react";

function PlayIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_251_737)">
        <path
          fill="currentColor"
          d="M7.79 20.276c.39 0 .722-.156 1.112-.38l11.387-6.583c.81-.478 1.094-.79 1.094-1.308s-.283-.83-1.094-1.299L8.902 4.114c-.39-.224-.722-.37-1.113-.37-.723 0-1.172.546-1.172 1.396v13.73c0 .85.45 1.406 1.172 1.406z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_251_737">
          <path
            fill="currentColor"
            d="M0 0H14.766V16.553H0z"
            transform="translate(6.617 3.724)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlayIcon;
