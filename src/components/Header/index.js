import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../shared/assets/logo.svg";

import { colors } from "../../shared/styles/colors";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13rem;

  .logo {
    fill: ${colors.yellow};
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
