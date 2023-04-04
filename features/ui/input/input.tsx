import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

type InputProps = {
  //children: React.ReactNode;
  disabled?: boolean;
  label?: boolean;
  hint?: boolean;
  icon?: boolean;
  error?: boolean;
  onClick?: () => void;
};

const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${color("gray", 700)};
  margin-bottom: 6px;
  letter-spacing: 0.15px;
`;

const HintSpan = styled.span<{
  error?: boolean;
}>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => (props.error ? color("error", 500) : color("gray", 500))};

  margin-top: 6px;
  letter-spacing: 0.4px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const ErrorIcon = styled.span`
  position: absolute;
  left: 290px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background-image: url("/icons/error-icon.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

const InputIcon = styled.span`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-image: url("/icons/mail-icon.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

const InputContainer = styled.input<{
  value: string;
  disabled?: boolean;
  icon?: boolean;
  error?: boolean;
}>`
  box-sizing: border-box;
  width: 320px;
  height: 44px;
  line-height: normal;
  border-radius: 8px;
  margin: 0;
  padding: 0 14px;
  letter-spacing: 0.4px;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  ${(props) =>
    props.icon &&
    css`
      padding-left: 42px;
    `}

  ${(props) => {
    if (props.disabled) {
      return css`
        background: ${props.error ? "transparent" : color("gray", 50)};
        border: 1px solid
          ${props.error ? color("error", 300) : color("gray", 300)};
        cursor: not-allowed !important;

        &:focus {
          outline: none;
          border: 1px solid
            ${props.error ? color("error", 300) : color("gray", 300)};
        }
        &:focus-visible {
          outline: none;
          border: 1px solid
            ${props.error ? color("error", 300) : color("gray", 300)};
        }
      `;
    } else {
      return css`
        border: 1px solid
          ${props.error ? color("error", 300) : color("gray", 300)};

        cursor: pointer;
        color: ${color("gray", 900)};

        &::placeholder {
          color: ${color("gray", 500)};
        }

        &:focus {
          border: 1px solid
            ${props.error ? color("error", 300) : color("primary", 300)};
          outline: none;
          box-shadow: ${props.error
            ? "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2"
            : "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF"};
        }
      `;
    }
  }}
`;
export function StoryInput({
  //children,
  disabled = false,
  label = false,
  hint = false,
  icon = false,
  error = false,
  onClick,
}: InputProps) {
  const [inputData, setInputData] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setInputData(value);
  }

  console.log("input data ", inputData);
  return (
    <ElementWrapper>
      {label && <LabelSpan>Email</LabelSpan>}
      <InputWrapper className="wrapper">
        {icon && <InputIcon />}
        <InputContainer
          onChange={handleChange}
          value={inputData}
          placeholder="olivia@untitledui.com"
          disabled={disabled}
          icon={icon}
          error={error}
        ></InputContainer>
        {error && <ErrorIcon />}
      </InputWrapper>
      {hint && (
        <HintSpan error={error}>
          {error
            ? "This is an error message"
            : "This is a hint text to help user."}
        </HintSpan>
      )}
    </ElementWrapper>
  );
}
