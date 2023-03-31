import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomSelect } from "./select";
import { color, textFont, space } from "@styles/theme";

import styled, { css } from "styled-components";

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

export default {
  title: "UI/CustomSelect",
  component: CustomSelect,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = ({
  disabled,
  icon,
  placeholder,
  hint,
  label,
  error,
}) => {
  return (
    <div style={{ padding: 200 }}>
      {label && <Label>Team member</Label>}
      <CustomSelect
        disabled={disabled}
        icon={icon}
        error={error}
        placeholder="Select team member"
      ></CustomSelect>
      {hint && (
        <Hint error={error}>
          {error
            ? "This is an error message."
            : "This is a hint text to help the user."}
        </Hint>
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};
