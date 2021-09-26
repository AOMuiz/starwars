import React from "react";
import styled from "styled-components";
import { colors } from "../../shared/styles";

function Select({ defaultval, data, onSelectChange }) {
  return (
    <div className="select">
      <StyledSelect defaultValue={defaultval} onChange={onSelectChange}>
        <option value={defaultval} disabled>
          {defaultval}
        </option>
        {data.map((input, index) => (
          <option key={input?.id ?? index} value={`${input?.id ?? input}`}>
            {input?.title ?? input}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}

export default Select;

const StyledSelect = styled.select`
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
