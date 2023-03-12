import { FooterItemLink } from "./footer-item-link";
import { breakpoint, color, space, zIndex } from "@styles/theme";
import styled, { css } from "styled-components";
import packageJson from "../../../package.json";

const footerItems = [
  { text: "Docs", href: "#" },
  { text: "API", href: "#" },
  { text: "Help", href: "#" },
  { text: "Community", href: "#" },
];

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkList = styled(List)`
  display: flex
  align-items: center;
  order: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    margin-right: 51px;
    order: 1;
  }
`;

const containerStyles = css`
  width: 100%;
  height: 60px;
  background-color: white;

  height: 177px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 13px 25px 13px 0;
  margin-right: 20px;

  @media (min-width: ${breakpoint("desktop")}) {
    width: 100%;
    height: 60px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin-right: 0;
  }
`;

const Container = styled.div`
  ${containerStyles}

  @media (min-width: ${breakpoint("desktop")}) {
  }
`;

const Logo = styled.img`
  padding-bottom: 6px;
  height: 33px;
  content: url("/icons/logo-small.svg");
  order: 1;
  margin: 0;
  @media (min-width: ${breakpoint("desktop")}) {
    margin: ${space(0, 4)};
    content: url("/icons/logo-small.svg");
    padding: 0 17px 0 18px;
    order: 2;
  }
`;

const Version = styled.span`
  padding-bottom: 1px;
  padding-left: 3px;
  order: 2;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @media (min-width: ${breakpoint("desktop")}) {
    padding: 0 0 0 31px;
    order: 0;
  }
`;

export function Footer() {
  return (
    <Container>
      <Version>Version: {packageJson.version}</Version>
      <LinkList>
        {footerItems.map((footerItem, index) => (
          <FooterItemLink key={index} {...footerItem} />
        ))}
      </LinkList>

      <Logo alt="logo" />
    </Container>
  );
}
