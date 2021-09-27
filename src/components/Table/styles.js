import styled from "styled-components";
import { colors } from "../../shared/styles/colors";

export const StyledSelect = styled.select`
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
  color: ${colors.white};
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
    // background-color: ${colors.white};
    color: ${colors.yellow};
    border-color: ${colors.blue};
  }
`;

export const StyledTable = styled.table`
  font-family: "Roboto", sans-serif;
  width: 100%;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.05);
`;

export const StyledThead = styled.thead`
  th {
    text-align: left;
    border: 1px solid black;
    border-bottom: 2px solid black;
    padding: 4px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  button {
    text-align: left;
    border: 0;
    border-radius: none;
    font-family: inherit;
    font-weight: 700;
    font-size: inherit;
    padding: 0.5em;
    margin-bottom: 1px;
    background-color: transparent;
    color: ${colors.white};
    width: 100%;
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
