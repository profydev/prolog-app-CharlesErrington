import React from "react";
import styled, { css } from "styled-components";
import CheckboxUncheckedIcon from "./checkbox-unchecked.svg";

const StyledCheckboxUncheckedIcon = styled(CheckboxUncheckedIcon)`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5.5px;
    box-shadow: 0px 0px 0px 4px #f4ebff;
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
  }

  &.focused::before {
    opacity: 1;
  }
`;

export default StyledCheckboxUncheckedIcon;
