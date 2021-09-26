import { useMemo, useState } from "react";

const useSortableData = (data, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  const [filteredMovie, setFilteredMovie] = useState(data);
  console.log({ sortConfig });

  const sortedItems = useMemo(() => {
    let sortableItems = [...filteredMovie];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredMovie, sortConfig]);

  // useEffect(() => {}, [sortedItems]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  console.log({ sortedItems });
  // console.log(filteredMovie);

  return { items: sortedItems, requestSort, sortConfig, setFilteredMovie };
};
export default useSortableData;
