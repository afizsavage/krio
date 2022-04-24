import React from 'react';
import { BiSearch } from 'react-icons/bi';
import Navigation from './navigation';

import SearchBar from './search_bar';
import { SearchType } from './types';

interface Props extends SearchType {
  menuOpen: boolean;
}

const MobileNav = ({
  menuOpen,
  activeSearch,
  searchValue,
  setsearchValue,
}: Props) => {
  const clearInputField = () => setsearchValue('');

  return (
    <div
      id="mobileMenu"
      className={menuOpen ? 'mobileMenu' : 'mobileMenu -translate-y-full'}
    >
      <div className="flex w-full justify-center ">
        <button
          onClick={clearInputField}
          className="cursor-default z-50 text-gray-400 focus:outline-none w-10  relative flex justify-center items-center"
        >
          <BiSearch className=" w-6 h-6 text-gray-400" />
        </button>
        <SearchBar
          activeSearch={activeSearch}
          searchValue={searchValue}
          setsearchValue={setsearchValue}
        />
      </div>
      <Navigation />
    </div>
  );
};

export default MobileNav;
