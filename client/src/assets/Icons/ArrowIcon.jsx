import React from "react";

function ArrowIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 4l-8 8 8 8"
      ></path>
    </svg>
  );
}

export default ArrowIcon;
