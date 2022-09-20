import { ChangeEvent, KeyboardEvent, useState } from "react";

export interface UseSearchTextParams<T> {
  data: Array<T>;
  onSearchFilter: (text: string) => Array<T>;
}

export const useSearchText = <T>({
  data,
  onSearchFilter,
}: UseSearchTextParams<T>) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState("");
  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);
  const onSearchInputClick = () => {
    setFilteredData(onSearchFilter(searchText));
  };
  const onSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearchInputClick();
  };

  return {
    filteredData,
    searchText,
    setSearchText,
    onSearchInputChange,
    onSearchInputClick,
    onSearchInputKeyDown,
  };
};
