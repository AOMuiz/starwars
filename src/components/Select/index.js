import React from "react";
import { StyledSelect } from "../Table/CharacterTable.styles";

function Select({ defaultval, data, onSelectChange }) {
  console.log(data);
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

        {/* <div className="select">
          <StyledSelect
            defaultValue="Select Movie"
            onChange={(e) => onSelectChange(e)}
          >
            <option value="Select Movie" disabled>
              Select Movie
            </option>
            {movieList.map((movie) => (
              <option key={movie.id} value={`${movie.id}`}>
                {movie.title}
              </option>
            ))}
          </StyledSelect>
        </div> */}
      </StyledSelect>
    </div>
  );
}

export default Select;
