import React from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

export enum StoryButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xlg = "xlg",
}
//test
export enum StoryButtonColor {
  primary = "primary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
  secondary = "secondary",
}

type StoryButtonProps = {
  children: React.ReactNode;
  size?: StoryButtonSize;
  color?: StoryButtonColor;
  disabled?: boolean;
  leading?: boolean;
  following?: boolean;
  iconOnly?: boolean;
  icon?: string;
  onClick?: () => void;
};

const StyledIcon = styled.img<{
  leading: boolean;
  following: boolean;
  iconOnly?: boolean;
}>`
  height: 20px;
  padding-right: ${(props: { leading: boolean }) =>
    props.leading ? "8px" : "0"};
  padding-left: ${(props: { following: boolean }) =>
    props.following ? "8px" : "0"};
`;

const StoryButtonContainer = styled.button<{
  size: StoryButtonSize;
  color: StoryButtonColor;
  leading?: boolean;
  following?: boolean;
  iconOnly?: boolean;
}>`
  cursor: pointer;

  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  border-radius: 8px;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;

  ${(props) => {
    switch (props.size) {
      case StoryButtonSize.sm:
        return css`
          padding: ${props.iconOnly ? "12px" : "7px 13px"};

          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.5px;
        `;
      case StoryButtonSize.md:
        return css`
          padding: ${props.iconOnly ? "15px" : "9px 15px"};
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.5px;
        `;
      case StoryButtonSize.lg:
        return css`
          padding: ${props.iconOnly ? "17.5px" : "9px 17.5px"};
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.5px;
        `;
      case StoryButtonSize.xlg:
        return css`
          padding: ${props.iconOnly ? "19.5px" : "11px 19.5px"};
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.5px;
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case StoryButtonColor.gray:
        return css`
          background: white;
          border: 1px solid ${color("gray", 300)};
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          color: ${color("gray", 700)};

          &:not(:disabled):hover {
            background: ${color("gray", 50)};
            border: 1px solid ${color("gray", 300)};
            color: ${color("gray", 800)};
          }

          &:not(:disabled):hover:focus {
            border: 1px solid ${color("gray", 300)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #f2f4f7;
          }

          &:disabled {
            border: 1px solid ${color("gray", 200)};
            color: ${color("gray", 300)};
            cursor: not-allowed;
          }
        `;
      case StoryButtonColor.empty:
        return css`
          color: ${color("primary", 700)};

          &:not(:disabled):hover {
            background: ${color("primary", 50)};
          }

          &:not(:disabled):hover:focus {
            background-color: transparent;
          }

          &:disabled {
            color: ${color("gray", 300)};
            cursor: not-allowed;
          }
        `;
      case StoryButtonColor.emptyGray:
        return css`
          color: ${color("gray", 500)};

          &:not(:disabled):hover {
            background: ${color("gray", 50)};

            color: ${color("gray", 600)};
          }

          &:not(:disabled):hover:focus {
            background-color: transparent;
            color: ${color("gray", 500)};
          }

          &:disabled {
            color: ${color("gray", 300)};
            cursor: not-allowed;
          }
        `;
      case StoryButtonColor.primary:
        return css`
          background: ${color("primary", 600)};
          border: 1px solid ${color("primary", 600)};
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          color: white;

          &:not(:disabled):hover {
            background: ${color("primary", 700)};
            border: 1px solid ${color("primary", 700)};
          }

          &:not(:disabled):hover:focus {
            background: ${color("primary", 600)};
            border: 1px solid ${color("primary", 600)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #f4ebff;
          }

          &:disabled {
            background: ${color("primary", 200)};
            border: 1px solid ${color("primary", 200)};

            cursor: not-allowed;
          }
        `;
      case StoryButtonColor.secondary:
        return css`
          background: ${color("primary", 50)};
          border: 1px solid ${color("primary", 50)};
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          color: ${color("primary", 700)};

          &:not(:disabled):hover {
            background: ${color("primary", 100)};
            border: 1px solid ${color("primary", 100)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          }

          &:not(:disabled):hover:focus {
            background: ${color("primary", 50)};
            border: 1px solid ${color("primary", 50)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #f4ebff;
          }

          &:disabled {
            background: ${color("primary", 25)};
            border: 1px solid ${color("primary", 25)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
            cursor: not-allowed;
            color: ${color("primary", 300)};
          }
        `;
      case StoryButtonColor.error:
        return css`
          background: ${color("error", 600)};
          border: 1px solid ${color("error", 600)};
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          color: white;

          &:not(:disabled):hover {
            background: ${color("error", 700)};
            border: 1px solid ${color("error", 700)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          }

          &:not(:disabled):hover:focus {
            background: ${color("error", 600)};
            border: 1px solid ${color("error", 600)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #fee4e2;
          }

          &:disabled {
            background: ${color("error", 200)};
            border: 1px solid ${color("error", 200)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
            cursor: not-allowed;
          }
        `;
      default:
        return css`
          background: ${color(props.color, 600)};
          color: white;
        `;
    }
  }}
`;
export function StoryButton({
  children = "Button CTA",
  size = StoryButtonSize.md,
  color = StoryButtonColor.primary,
  disabled = false,
  leading = false,
  following = false,
  iconOnly = false,
  icon = "/icons/circleIcon.png",
  onClick,
}: StoryButtonProps) {
  return (
    <StoryButtonContainer
      size={size}
      color={color}
      disabled={disabled}
      leading={leading}
      following={following}
      iconOnly={iconOnly}
      onClick={onClick}
    >
      {!iconOnly && leading && (
        <StyledIcon src={icon} leading={leading} following={false} />
      )}
      {iconOnly ? (
        <StyledIcon
          src={icon}
          iconOnly={iconOnly}
          leading={false}
          following={false}
        />
      ) : (
        children
      )}

      {!iconOnly && following && (
        <StyledIcon src={icon} leading={false} following={following} />
      )}
    </StoryButtonContainer>
  );
}
