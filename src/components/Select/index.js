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
          <option key={input?.id ?? index} value={`${input?.id ?? input}`}>
            {input?.title ?? input}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}

export default Select;
