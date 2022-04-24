import React, { useRef, useEffect } from 'react';

import { SearchType } from './types';

const SearchBar = ({
  activeSearch,
  searchValue,
  setsearchValue,
}: SearchType) => {
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
      placeholder="Do you have a word in mind?"
      ref={inputRef}
      type="text"
      value={searchValue}
      onChange={handleUserInput}
    />
  );
};

export default SearchBar;
