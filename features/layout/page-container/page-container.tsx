import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { SidebarNavigation } from "../sidebar-navigation";
import { color, displayFont, textFont, space, breakpoint } from "@styles/theme";
import { Footer } from "../footer/footer";

type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${color("gray", 900)};

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: white;
  min-height: calc(100vh);
  @media (min-width: ${breakpoint("desktop")}) {
    min-height: calc(100vh);
  }
`;
const ContentContainerChild = styled.div`
  margin-top: ${({ theme }) => theme.size.headerHeight};
  padding: ${space(8, 3)};

  @media (min-width: ${breakpoint("desktop")}) {
    margin-top: ${space(3)};
    padding: ${space(8)};
    border-top-left-radius: ${space(10)};
  }
`;
const Title = styled.h1`
  margin: ${space(0, 0, 1)};
  color: ${color("gray", 900)};
  ${displayFont("sm", "medium")}
`;

const Info = styled.div`
  margin-bottom: ${space(8)};
  color: ${color("gray", 500)};
  ${textFont("md", "regular")}
`;

export function PageContainer({ children, title, info }: PageContainerProps) {
  // combine title in a single string to prevent below warning
  // "Warning: A title element received an array with more than 1 element as children."
  const documentTitle = `ProLog - ${title}`;
  return (
    <Container>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarNavigation />
      <Main>
        <ContentContainer>
          <ContentContainerChild className="content-container-child">
            <Title>{title}</Title>
            <Info>{info}</Info>
            {children}
          </ContentContainerChild>
          <Footer />
        </ContentContainer>
      </Main>
    </Container>
  );
}
