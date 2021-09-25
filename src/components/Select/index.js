import React from "react";
import { StyledSelect } from "../Table/CharacterTable.styles";

function Select({ defaultval, data, onSelectChange }) {
  return (
    <div className="select">
      <StyledSelect defaultValue={defaultval} onChange={onSelectChange}>
        <option value={defaultval} disabled>
          {defaultval}
        </option>
        {data.map((input, index) => (
          <option key={input} value={`${input}`}>
            {input}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}

export default Select;
