import useSortableData from "../hooks/useSortableData";
import { Label } from "./MovieDetail.style";

const CharactersTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  console.log(items);

  return (
    <div>
      <Label>Movie Characters</Label>
      <table>
        <thead>
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
                onClick={() => requestSort("mass")}
                className={getClassNamesFor("mass")}
              >
                Mass
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
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.mass}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharactersTable;
