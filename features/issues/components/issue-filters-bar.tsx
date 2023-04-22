import { StoryButton } from "../../ui/storyButton/story-button";
import { StoryInput } from "../../ui/input/input";
import { CustomSelect } from "../../ui/select/select";
import styled, { css } from "styled-components";

const IssueFiltersBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const OptionContainer = styled.div`
  display: flex;
`;

export function IssueFiltersBar() {
  return (
    <IssueFiltersBarContainer>
      <StoryButton leading={true} icon="/icons/check-icon.png">
        Resolve selected issues
      </StoryButton>
      <OptionContainer>
        <CustomSelect />
        <StoryInput
          icon={true}
          iconLocation="/icons/search-icon.png"
          placeholder="Project Name"
        />
      </OptionContainer>
    </IssueFiltersBarContainer>
  );
}
