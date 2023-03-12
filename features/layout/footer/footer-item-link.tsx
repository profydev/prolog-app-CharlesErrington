import Link from "next/link";
import React from "react";

import { color, space } from "@styles/theme";
import styled, { css } from "styled-components";

type MenuItemProps = {
  text: string;
  href: string;
};

export const Anchor = styled(Link)`
  text-decoration: none;
`;

export const ListItem = styled.li`
  margin: 2px 12px 0 12px;
`;

const Title = styled.h1`
  margin: ${space(0, 0, 1)};
  color: ${color("gray", 500)};
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export function FooterItemLink({ text, href }: MenuItemProps) {
  return (
    <ListItem>
      <Anchor href={href}>
        <Title>{text}</Title>
      </Anchor>
    </ListItem>
  );
}
