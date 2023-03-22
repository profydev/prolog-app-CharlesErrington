import React from "react";

const CheckboxCheckedIcon: React.FC = () => (
  <svg
    className="checkbox-icon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className="checkbox-background"
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="5.5"
      fill="#F9F5FF"
    />
    <path
      className="checkbox-tick"
      d="M14.6666 6.5L8.24992 12.9167L5.33325 10"
      stroke="#7F56D9"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      className="checkbox-border"
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="5.5"
      stroke="#7F56D9"
    />
  </svg>
);

export default CheckboxCheckedIcon;
