import React from "react";
import styled from "styled-components";
import { color, displayFont, textFont, space, breakpoint } from "@styles/theme";
import { useGetProjects } from "@features/projects";

const ErrorContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin: 0 24px 0 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${color("error", 700)};
  background-color: ${color("error", 25)};
  border: 1px solid ${color("error", 300)};
  border-radius: 8px;
`;
//test
const ErrorTextWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const ErrorText = styled.span`
  padding: 0 12px;
`;

const StyledLinkWrapper = styled.span`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled.span`
  padding: 0 8px 0 0;
  min-width: 63px;
`;

type GetProjectsReturnType = ReturnType<typeof useGetProjects>;

interface ProjectListProps {
  error: GetProjectsReturnType;
}

export function ErrorBox(props: ProjectListProps) {
  console.log(props.error);

  const refetchClick = props.error.refetch;

  const handleRefresh = () => {
    refetchClick();
  };

  return (
    <ErrorContainer onClick={handleRefresh}>
      <ErrorTextWrapper>
        <img src="/icons/alert-icon.png" alt="Warning" />
        <ErrorText>
          There was a problem while loading the project data
        </ErrorText>
      </ErrorTextWrapper>
      <StyledLinkWrapper>
        <StyledLink>Try again</StyledLink>{" "}
        <img src="/icons/arrow-right.png" alt="Refresh" />
      </StyledLinkWrapper>
    </ErrorContainer>
  );
}
