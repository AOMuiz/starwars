import { useMemo, useState } from "react";

const useSortableData = (data, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  const [filteredMovie, setFilteredMovie] = useState(data);

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

  return { items: sortedItems, requestSort, sortConfig, setFilteredMovie };
};
export default useSortableData;
