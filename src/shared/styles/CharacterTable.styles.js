import styled from "styled-components";
import { COLOR_YELLOW, COLOR_WHITE, COLOR_BLUE } from "./colors";

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0;
  background: #5c6664;
  background-image: none;
  flex: 1;
  padding: 0 0.5em;
  color: ${COLOR_WHITE};
  cursor: pointer;
  font-size: 1em;

  ::-ms-expand {
    display: none;
  }
`;
export const Tbody = styled.tbody`
  td {
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
  }

  tr:hover {
    // background-color: ${COLOR_WHITE};
    color: ${COLOR_YELLOW};
    border-color: ${COLOR_BLUE};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  th {
    text-align: left;
    border: 1px solid black;
    border-bottom: 2px solid black;
    padding: 4px;
  }

  button {
    border: 0;
    border-radius: none;
    font-family: inherit;
    font-weight: 700;
    font-size: inherit;
    padding: 0.5em;
    margin-bottom: 1px;
    background-color: transparent;
    color: #fff;
    :hover {
      cursor: pointer;
    }
  }

  button.ascending::after {
    content: "👇";
    display: inline-block;
    margin-left: 1em;
  }

  button.descending::after {
    content: "☝️";
    display: inline-block;
    margin-left: 1em;
  }
`;
