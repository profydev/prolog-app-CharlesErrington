import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryInput } from "./input";

import styled, { css } from "styled-components";
//test

export default {
  title: "UI/StoryInput",
  component: StoryInput,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof StoryInput>;

const Template: ComponentStory<typeof StoryInput> = (args) => {
  return (
    <div style={{ padding: 50 }}>
      <StoryInput {...args}></StoryInput>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};
