import styled from "styled-components";

import { COLOR_WHITE, COLOR_GRAY } from "../shared/styles/colors";

export const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

export const Label = styled.h4`
  font-family: inherit;
  font-size: 1.8rem;
  color: ${COLOR_GRAY};
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  font-family: inherit;
  font-size: 1.6rem;
  color: ${COLOR_WHITE};
  padding: 1.5rem;
  line-height: 2.2rem;
  text-align: justify;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: ${COLOR_WHITE};
  margin-bottom: 3rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-family: "Star Jedi", "Open Sans", sans-serif;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 576px */
  @media (min-width: 36em) {
    max-width: 54rem;
  }

  /* 768px */
  @media (min-width: 48em) {
    max-width: 72rem;
  }

  /* 992px */
  @media (min-width: 62em) {
    max-width: 96rem;
  }

  /* 1200px */
  @media (min-width: 75em) {
    max-width: 114rem;
  }
`;
