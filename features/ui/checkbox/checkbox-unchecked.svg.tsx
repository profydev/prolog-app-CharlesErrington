import React from "react";

type Props = {
  className?: string;
};

const CheckboxUncheckedIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={`checkbox-icon ${className}`}
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
      fill="white"
    />
    <rect
      className="checkbox-border"
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="5.5"
      stroke="#D0D5DD"
    />
  </svg>
);

export default CheckboxUncheckedIcon;
