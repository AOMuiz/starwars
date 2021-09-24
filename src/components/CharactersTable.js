import useSortableData from "../hooks/useSortableData";
import { Label } from "./MovieDetail/MovieDetail.style";
import { Table, Thead, Tbody } from "../shared/styles/CharacterTable.styles";
import { useState, useEffect } from "react";
import { Select } from "../shared/styles/CharacterTable.styles";

const CharactersTable = ({ products }) => {
  const { items, requestSort, sortConfig } = useSortableData(products);
  const [totalCharacter, setTotalCharcter] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [filteredCharacter, setFilteredCharacter] = useState([]);
  const genders = ["male", "female", "n/a", "hermaphrodite"];

  const onSelectChange = (event) => {
    console.log(event.target.value);
    setSelectedId(event.target.value);
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

  const filterCharacterByAge = (agetofilter) => {
    let Lage = agetofilter;
    let filtered = items.filter((age) => age.Lagetofilter);
    return filtered;
  };

  const getCharacter = (data) => {
    let character = data.filter((char) => char.name).length;
    return character;
  };

  useEffect(() => {
    setTotalHeight(getHeight(items));
    setTotalCharcter(getCharacter(items));
    filterCharacterByAge(items);
    console.log(getHeight(items));
  }, [items, products]);

  return (
    <div>
      <Label>Movie Characters</Label>

      <div className="select">
        <Select defaultValue="Select Age" onChange={(e) => onSelectChange(e)}>
          <option value="Select Age" disabled>
            Select Age
          </option>
          {genders.map((character, index) => (
            <option key={index} value={`${character}`}>
              {character}
            </option>
          ))}
        </Select>
      </div>
      <Table>
        <Thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("height")}
                className={getClassNamesFor("height")}
              >
                Height
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("gender")}
                className={getClassNamesFor("gender")}
              >
                Gender
              </button>
            </th>
          </tr>
        </Thead>
        <Tbody>
          {items.map((item, index) => (
            <tr key={item.name}>
              <td>{`${index} - ${item.name}`}</td>
              <td>{item.height}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </Tbody>
        <tfoot>
          <tr>
            <th>Total Heigths:</th>
            <td> {totalHeight}</td>
          </tr>
          <tr>
            <th>Total Characters: </th>
            <td>{totalCharacter}</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default CharactersTable;
