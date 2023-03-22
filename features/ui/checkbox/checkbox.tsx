import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}
//test
export enum CheckboxState {
  unchecked = "unchecked",
  checked = "checked",
  partly_checked = "partly_checked",
}

type CheckboxProps = {
  children: React.ReactNode;
  size?: CheckboxSize;
  state?: CheckboxState;
  disabled?: boolean;
  label?: boolean;
  onClick?: () => void;
};

const CheckboxContainer = styled.span<{
  size: CheckboxSize;
  state: CheckboxState;
  disabled?: boolean;
  label?: boolean;
}>`
  cursor: pointer;

  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  display: flex;
  align-items: center;

  ${(props) => {
    if (props.label && props.size === CheckboxSize.sm) {
      return css`
        & .checkbox-icon {
          margin-right: 8px;
        }
        & span {
          display: inline;
        }
      `;
    } else if (props.label && props.size === CheckboxSize.md) {
      return css`
        & .checkbox-icon {
          margin-right: 12px;
        }
        & span {
          display: inline;
        }
      `;
    } else {
      return css`
        & span {
          display: none;
        }
      `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case CheckboxSize.sm:
        return css`
          & .checkbox-icon {
            height: 16px;
            width: 16px;
          }

          font-size: 14px;
        `;
      case CheckboxSize.md:
        return css`
          & .checkbox-icon {
            height: 20px;
          }

          font-size: 16px;
        `;
    }
  }}

  ${(props) => {
    switch (props.state) {
      case CheckboxState.unchecked:
        if (!props.disabled) {
          return css`
            & .checkbox-icon:not(:disabled):hover {
              & .checkbox-border {
                stroke: ${color("primary", 600)};
              }
              & .checkbox-background {
                fill: ${color("primary", 50)};
              }
            }
          `;
        } else {
          return css`
            & .checkbox-icon {
              & .checkbox-border {
                stroke: ${color("gray", 200)};
              }
              & .checkbox-background {
                fill: ${color("gray", 100)};
              }
            }
          `;
        }

      case CheckboxState.checked:
        if (!props.disabled) {
          return css``;
        } else {
          return css`
            & .checkbox-icon {
              & .checkbox-border {
                stroke: ${color("gray", 200)};
              }
              & .checkbox-background {
                fill: ${color("gray", 100)};
              }
              & .checkbox-tick {
                stroke: ${color("gray", 200)};
              }
            }
          `;
        }
      case CheckboxState.partly_checked:
        if (!props.disabled) {
          return css``;
        } else {
          return css`
            & .checkbox-icon {
              & .checkbox-border {
                stroke: ${color("gray", 200)};
              }
              & .checkbox-background {
                fill: ${color("gray", 100)};
              }
              & .checkbox-tick {
                stroke: ${color("gray", 200)};
              }
            }
          `;
        }

      default:
        return css``;
    }
  }}

  &:focus .checkbox-icon {
    box-shadow: 0px 0px 0px 4px #f4ebff;
    border-radius: 30%;
    ${(props) => {
      switch (props.state) {
        case CheckboxState.unchecked:
          return css``;
        case CheckboxState.checked:
          return css`
            & .checkbox-background {
              fill: ${color("primary", 50)};
            }
          `;
        case CheckboxState.partly_checked:
          return css`
            & .checkbox-background {
              fill: ${color("primary", 50)};
            }
          `;
        default:
          return css``;
      }
    }}
  }
`;
export function Checkbox({
  children,
  size = CheckboxSize.md,
  state = CheckboxState.unchecked,
  disabled = false,
  label = false,
  onClick,
}: CheckboxProps) {
  return (
    <CheckboxContainer
      size={size}
      state={state}
      disabled={disabled}
      label={label}
      onClick={onClick}
    >
      {children}
    </CheckboxContainer>
  );
}
