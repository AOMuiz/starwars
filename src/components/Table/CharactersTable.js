import useSortableData from "../../hooks/useSortableData";
import { StyledTable, Thead, Tbody } from "./CharacterTable.styles";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../shared/styles/colors";
import { SortData } from "../../shared/helpers/data";
import Select from "../Select";

const CharactersTable = ({ products }) => {
  const { items, requestSort, sortConfig } = useSortableData(products);
  const [totalCharacter, setTotalCharcter] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);
  const [genders, setGenders] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState(items);

  const onSelectChange = (event) => {
    let value = event.target.value;
    let copiedItems = items.slice();
    const total = copiedItems.filter((item) => item.gender === value);
    setFilteredMovie(total);
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const getHeight = (data) => {
    let numOr0 = (n) => (isNaN(n) ? 0 : n);
    let heightCount = data.reduce(
      (a, b) => numOr0(a) + numOr0(Number(b.height)),
      0
    );
    return heightCount;
  };

  const getCharacter = (data) => {
    let character = data.filter((char) => char.name).length;
    return character;
  };

  const getGenders = (arr) => {
    const unique = [...new Set(arr.map((item) => item.gender))];
    setGenders(unique);
  };

  useEffect(() => {
    setTotalHeight(getHeight(filteredMovie));
    setTotalCharcter(getCharacter(filteredMovie));

    getGenders(items);
  }, [filteredMovie, items]);

  console.log(genders);

  return (
    <div>
      <Label>Movie Characters</Label>

      {/* <div className="select">
        <StyledSelect defaultValue="Select Gender" onChange={onSelectChange}>
          <option value="Select Gender" disabled>
            Select Gender
          </option>
          {genders.map((gender, index) => (
            <option key={index} value={`${gender}`}>
              {gender}
            </option>
          ))}
        </StyledSelect>
      </div> */}
      <Select
        defaultval="Select Gender"
        data={genders}
        onSelectChange={onSelectChange}
      />
      <StyledTable>
        <Thead>
          <tr>
            {SortData.map((item) => (
              <th>
                <button
                  type="button"
                  onClick={() => requestSort(item)}
                  className={getClassNamesFor(item)}
                >
                  Name
                </button>
              </th>
            ))}
          </tr>
        </Thead>
        <Tbody>
          {filteredMovie.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </Tbody>
        <tfoot>
          {/* <TableContainer type value /> */}
          <tr>
            <th>Total Heigths:</th>
            <td> {totalHeight}cm</td>
          </tr>
          <tr>
            <th>Total Characters: </th>
            <td>{totalCharacter}cm</td>
          </tr>
        </tfoot>
      </StyledTable>
    </div>
  );
};

export default CharactersTable;

export const Label = styled.h4`
  font-family: inherit;
  font-size: 1.8rem;
  color: ${colors.gray};
  margin-bottom: 1.5rem;
`;
