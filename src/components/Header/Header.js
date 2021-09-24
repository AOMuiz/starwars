import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../shared/assets/logo.svg";

import { COLOR_YELLOW } from "../../shared/styles/colors";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13rem;

  .logo {
    fill: ${COLOR_YELLOW};
    width: 100%;
    max-width: 45rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Logo className="logo" />
    </HeaderStyle>
  );
}
