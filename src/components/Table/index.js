import { useState, useEffect } from "react";
import useSortableData from "../../hooks/useSortableData";
import { StyledTable, StyledThead, Tbody } from "./styles";

import styled from "styled-components";
import { colors } from "../../shared/styles/";
import { SortData } from "../../shared/helpers/data";

import Select from "../Select";
import Footer from "./Footer";

const CharactersTable = ({ products: data }) => {
  const [totalCharacter, setTotalCharcter] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);
  const [genders, setGenders] = useState([]);
  const { items, requestSort, sortConfig, setFilteredMovie } =
    useSortableData(data);
  const [convertedHeight, setConvertedHeight] = useState([]);

  const onSelectChange = (event) => {
    let value = event.target.value;
    let copiedItems = data.slice();
    const result = copiedItems.filter((item) => item.gender === value);
    setFilteredMovie(result);
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const getTotalHeight = (data) => {
    let numOr0 = (n) => (isNaN(n) ? 0 : n);
    let heightCount = data.reduce(
      (a, b) => numOr0(a) + numOr0(Number(b.height)),
      0
    );
    let toInch = heightCount * 0.3937;
    let toFoot = heightCount * 0.032808;
    let convertHeight = [toInch.toFixed(2), toFoot.toFixed(2)];
    setConvertedHeight([...convertHeight]);
    return heightCount;
  };

  const getTotalCharacter = (data) => {
    let character = data.filter((char) => char.name).length;
    return character;
  };

  const getGenders = (arr) => {
    const unique = [...new Set(arr.map((item) => item.gender))];
    setGenders(unique);
  };

  useEffect(() => {
    setTotalHeight(getTotalHeight(items));
    setTotalCharcter(getTotalCharacter(items));
    getGenders(data);
  }, [items, data]);

  return (
    <div>
      <Label>Movie Characters</Label>
      <Select
        defaultval="Select Gender"
        data={genders}
        onSelectChange={onSelectChange}
      />
      <StyledTable>
        <StyledThead>
          <tr>
            {SortData.map((item) => (
              <th key={item}>
                <button
                  type="button"
                  onClick={() => requestSort(item)}
                  className={getClassNamesFor(item)}
                >
                  {item}
                </button>
              </th>
            ))}
          </tr>
        </StyledThead>
        <Tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </Tbody>
        <Footer
          totalHeight={totalHeight}
          totalCharacter={totalCharacter}
          convertedHeight={convertedHeight}
        />
      </StyledTable>
    </div>
  );
};

export default CharactersTable;

export const Label = styled.h4`
  font-family: "Star jedi", "Roboto", sans-serif;
  font-weight: light;
  font-size: 1.8rem;
  color: ${colors.gray};
  background: linear-gradient(315deg, #fbb034 0%, ${colors.yellow} 74%);
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
`;
