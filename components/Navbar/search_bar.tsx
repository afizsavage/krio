import React, { useRef, useEffect } from 'react';

type Props = {
  activeSearch: boolean;
  searchValue: string;
  setsearchValue: any;
};

const SearchBar = ({ activeSearch, searchValue, setsearchValue }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUserInput = (e: any) => {
    setsearchValue(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current && activeSearch) {
      inputRef.current.focus();
    }
  }, [activeSearch]);

  return (
    <input
      className="h-full text-gray-700 w-80 outline-none"
      placeholder="Search for a krio word"
      ref={inputRef}
      type="text"
      value={searchValue}
      onChange={handleUserInput}
    />
  );
};

export default SearchBar;
