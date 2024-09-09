import { useSearchParams } from "react-router-dom";

export function useFilterSort(filterName, options) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterName) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterName, value);
    setSearchParams(searchParams);
  }

  return { currentFilter, handleClick };
}
