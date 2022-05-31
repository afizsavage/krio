import React from 'react';
import { BiSearch } from 'react-icons/bi';
import MenuButton from './menu_button';
import { MenuType, SearchType } from './types';

interface Props extends MenuType, SearchType {
  setActiveSearch: (e: boolean) => void;
}

const LeftNav = ({
  activeSearch,
  menuOpen,
  searchValue,
  setMenuOpen,
  setsearchValue,
  setActiveSearch,
}: Props) => {
  const clearInputField = () => setsearchValue('');

  return (
    <div className="tMBWrapper ">
      <MenuButton
        activeSearch={activeSearch}
        menuOpen={menuOpen}
        searchValue={searchValue}
        setMenuOpen={setMenuOpen}
        setsearchValue={setsearchValue}
        setActiveSearch={setActiveSearch}
      />
      {activeSearch && (
        <button
          onClick={clearInputField}
          className="cursor-default z-50 text-gray-400 focus:outline-none w-10 h-10 relative flex justify-center items-center"
        >
          <BiSearch className=" w-6 h-6 text-gray-400" />
        </button>
      )}
    </div>
  );
};

export default LeftNav;
