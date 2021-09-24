import useSortableData from "../hooks/useSortableData";
import { Label } from "./MovieDetail.style";
import { Table, Thead, Tbody } from "../shared/styles/CharacterTable.styles";
import { useState, useEffect } from "react";

const CharactersTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const [totalCharcter, setTotalCharcter] = useState(0);
  const [totalHeight, setTotalHeight] = useState();
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
  useEffect(() => {
    setTotalHeight(getHeight(items));
    setTotalCharcter(getCharacter(items));
    console.log(getHeight(items));
  }, [items, props.products]);

  return (
    <div>
      <Label>Movie Characters</Label>
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
            <td>Total characters: {totalCharcter}</td>
            <td>Total Heigths: {totalHeight}</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default CharactersTable;
