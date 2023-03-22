import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox, CheckboxSize, CheckboxState } from "./checkbox";
import CheckboxUncheckedIcon from "./checkbox-unchecked.svg";
import CheckboxCheckedIcon from "./checkbox-checked.svg";
import CheckboxPartialIcon from "./checkbox-partial.svg";

import styled, { css } from "styled-components";

function getImageSrc(state: CheckboxState): any {
  switch (state) {
    case CheckboxState.unchecked:
      return <CheckboxUncheckedIcon />;
    case CheckboxState.checked:
      return <CheckboxCheckedIcon />;
    case CheckboxState.partly_checked:
      return <CheckboxPartialIcon />;

    default:
      return "";
  }
}

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({
  size,
  state = CheckboxState.unchecked,
  disabled,
  label,
}) => {
  return (
    <div style={{ padding: 50 }}>
      <Checkbox size={size} disabled={disabled} state={state} label={label}>
        {getImageSrc(state)}

        <span>Button CTA</span>
      </Checkbox>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.sm,
  state: CheckboxState.unchecked,
};
Default.parameters = {
  viewMode: "docs",
};
