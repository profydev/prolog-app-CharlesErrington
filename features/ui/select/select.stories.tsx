import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomSelect } from "./select";
import { color, textFont, space } from "@styles/theme";

import styled, { css } from "styled-components";

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
      <CustomSelect
        disabled={disabled}
        icon={icon}
        error={error}
        placeholder={placeholder}
        label={label}
        hint={hint}
      ></CustomSelect>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};
