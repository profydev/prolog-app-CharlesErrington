import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryButton, StoryButtonSize, StoryButtonColor } from "./story-button";

import styled, { css } from "styled-components";
//test
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

export default {
  title: "UI/StoryButton",
  component: StoryButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof StoryButton>;

const Template: ComponentStory<typeof StoryButton> = ({
  size,
  color,
  disabled,
  leading,
  following,
  iconOnly,
}) => {
  return (
    <div style={{ padding: 50 }}>
      <StoryButton
        color={color}
        size={size}
        disabled={disabled}
        leading={leading}
        following={following}
        iconOnly={iconOnly}
      >
        {!iconOnly && leading && (
          <StyledIcon
            src="/icons/circleIcon.png"
            leading={leading}
            following={false}
          />
        )}

        {iconOnly ? (
          <StyledIcon
            src="/icons/circleIcon.png"
            iconOnly={iconOnly}
            leading={false}
            following={false}
          />
        ) : (
          <span>Button CTA</span>
        )}
        {!iconOnly && following && (
          <StyledIcon
            src="/icons/circleIcon.png"
            leading={false}
            following={following}
          />
        )}
      </StoryButton>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: StoryButtonSize.sm,
  color: StoryButtonColor.primary,
  iconOnly: false,
};
Default.parameters = {
  viewMode: "docs",
};
