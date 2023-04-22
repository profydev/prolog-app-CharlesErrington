import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";
import dataArray from "./data";
import ChevronDownPng from "../../../public/icons/chevron-down.png";
import purpleCheck from "../../../public/icons/purple-check.png";
import ChevronUpPng from "../../../public/icons/chevron-up.png";

type SelectProps = {
  // children: React.ReactNode;
  disabled?: boolean;
  icon?: boolean;
  onClick?: () => void;
  onSelect?: (value: string) => void;
  placeholder?: string;
  label?: boolean;
  hint?: boolean;
  error?: boolean;
  hintText?: string;
  errorText?: string;
  data?: Array<{ id: number; name: string }>;
};

const Label = styled.div`
  color: ${color("gray", 700)};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  margin-bottom: 8px;
  letter-spacing: 0.6px;
`;

const Hint = styled.div<{
  error?: boolean;
}>`
  color: ${(props) =>
    props.error ? color("error", 500) : color("gray", 500)} !important ;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  margin-top: 6px;
  letter-spacing: 0.4px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background-color: white;

  border-radius: 4px;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  color: black;
  z-index: 1;
  display: block;
  padding: 9px 0;
`;

const Option = styled.div<{
  name?: string;
  selectedValue?: string;
  purpleCheck?: any;
}>`
  position: relative;
  padding: 13px 14px;
  cursor: pointer;
  letter-spacing: 0.3px;

  &:hover {
    background-color: ${color("gray", 100)};
  }

  ${(props) => {
    if (props.selectedValue === props.name) {
      return css`
        background-color: ${color("primary", 25)};
      `;
    }
  }}

  & .custom-tick {
    display: ${(props) =>
      props.selectedValue === props.name ? "block" : "none !important"};
    background: transparent;
    height: 1rem;
    width: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 3rem;
    pointer-events: none;
  }

  & .custom-tick::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-image: url(${(props) => props.purpleCheck});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const SelectWrapper = styled.div``;
const SelectContainer = styled.div<{
  disabled?: boolean;
  icon?: boolean;
  ChevronDownPng: any;
  ChevronUpPng: any;
  isOpen?: boolean;
  error?: boolean;
  selectedValue: string;
}>`
  ${(props) => {
    if (props.disabled) {
      return css`
        & .select-element {
          color: ${color("gray", 500)} !important;
          background-color: ${color("gray", 50)};
        }
      `;
    } else {
      return css`
        cursor: pointer;
        & .select-element {
          background: transparent;
        }
      `;
    }
  }}

  // remove default button styles
  
    border-radius: 8px;
  margin: 0;

  line-height: normal;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  width: 320px;
  height: 42px;

  position: relative;

  display: flex;
  align-items: center;

  & .select-element {
    width: 100%;
    height: 100%;

    padding: 0 60px 0 13px;
    border: 1px solid ${color("gray", 300)};
    border-radius: 8px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;

    appearance: none;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 45px;
    letter-spacing: 0.5px;

    ${(props) => {
      if (props.error) {
        return css`
          border: 1px solid ${color("error", 300)} !important;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

          &:focus {
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #fee4e2;
          }
        `;
      } else {
        if (props.isOpen) {
          return css`
            border: 1px solid ${color("primary", 300)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #f4ebff;
          `;
        } else {
          return css``;
        }
      }
    }}

    ${(props) => {
      if (props.selectedValue === "") {
        return css`
          color: ${color("gray", 500)};
        `;
      } else {
        return css`
          color: ${color("gray", 900)};
          letter-spacing: 0.1px !important;
          line-height: 44px;
        `;
      }
    }}
    
    & .user-icon {
      height: 20px;
      padding-right: 8px;
    }
  }

  &:focus {
    & .select-element {
      border: 1px solid ${color("primary", 300)};
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
    }
  }

  & .custom-arrow {
    display: block;
    background: transparent;
    height: 1rem;
    width: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 3rem;
    pointer-events: none;
  }

  & .custom-arrow::after {
    content: "";
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-image: url(${(props) =>
      props.isOpen ? props.ChevronUpPng : props.ChevronDownPng});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
export function CustomSelect({
  // children,
  disabled = false,
  icon = false,
  onClick,
  onSelect,
  placeholder = "Select a team member",
  label = false,
  hint = false,
  error = false,
  hintText = "This is a hint text to help the user.",
  errorText = "This is an error message.",
  data = dataArray,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const options = data.map((el) => {
    return (
      <div key={el.id}>
        <Option
          onClick={() => handleSelect(el.name)}
          selectedValue={selectedValue}
          name={el.name}
          purpleCheck={purpleCheck}
        >
          {el.name}
          <span className="custom-tick"></span>
        </Option>
      </div>
    );
  });

  return (
    <SelectWrapper>
      {label && <Label>Team member</Label>}
      <SelectContainer
        disabled={disabled}
        icon={icon}
        onClick={() => (disabled ? null : setIsOpen(!isOpen))}
        placeholder={placeholder}
        className="select-container"
        ChevronDownPng={ChevronDownPng}
        ChevronUpPng={ChevronUpPng}
        isOpen={isOpen}
        selectedValue={selectedValue}
        error={error}
      >
        <div
          className={`select-element ${isOpen ? "is-open" : ""} ${
            error ? "error" : ""
          }`}
        >
          {icon && (
            <img
              className="user-icon"
              src="./icons/user-icon.png"
              alt="user-icon"
            />
          )}

          {selectedValue || placeholder}
        </div>

        <span className="custom-arrow"></span>
        {isOpen && <Dropdown className="dropdown">{options}</Dropdown>}
      </SelectContainer>
      {hint && <Hint error={error}>{error ? errorText : hintText}</Hint>}
    </SelectWrapper>
  );
}
