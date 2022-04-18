import React, { useRef, useEffect } from 'react';

type Props = {
  activeSearch: boolean;
};

const SearchBar = ({ activeSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && activeSearch) {
      inputRef.current.focus();
    }
  }, [activeSearch]);

  return (
    <input
      ref={inputRef}
      className="h-full text-gray-700 w-80 outline-none"
      type="text"
      placeholder="Search for a krio word"
      autoFocus={true}
    />
  );
};

export default SearchBar;
