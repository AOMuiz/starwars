import React from "react";
import styled from "styled-components";
import { colors } from "../../shared/styles/colors";

const Footer = ({ totalHeight, totalCharacter, convertedHeight }) => {
  return (
    <StyledTfoot>
      <StyledTr>
        <th>Total Characters</th>
        <td>{totalCharacter}</td>
      </StyledTr>
      <StyledTr>
        <th>Total Heigths:</th>
        <td>
          {totalHeight}cm ({convertedHeight[0]} in/{convertedHeight[1]} ft)
        </td>
      </StyledTr>
    </StyledTfoot>
  );
};

export default Footer;

const StyledTfoot = styled.tfoot`
  color: ${colors.yellow};
  th {
    text-align: left;
    border: 1px solid black;
    border-bottom: 2px solid black;
    padding: 4px;
  }
`;

const StyledTr = styled.tr`
  padding: 10px;
  margin: 5px;
`;
