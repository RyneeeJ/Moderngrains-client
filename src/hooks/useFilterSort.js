import { useSearchParams } from "react-router-dom";

export function useFilterSort(filterName, options) {
  const [searchParams, setSearchParams] = useSearchParams();

  // This is used to persist the filter/sort value in the select element when the page reloads
  const currentFilter = searchParams.get(filterName) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterName, value);
    // Upon changing the filter/sort value, reset to page 1
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return { currentFilter, handleClick };
}
