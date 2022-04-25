import React from 'react';
import { BiSearch } from 'react-icons/bi';
import MenuButton from './menu_button';
import { MenuType, SearchType } from './types';

const LeftNav = (Props: SearchType & MenuType) => {
  const clearInputField = () => Props.setsearchValue('');

  return (
    <div className="tMBWrapper ">
      <MenuButton
        activeSearch={Props.activeSearch}
        menuOpen={Props.menuOpen}
        searchValue={Props.searchValue}
        setMenuOpen={Props.setMenuOpen}
        setsearchValue={Props.setsearchValue}
      />
      {Props.activeSearch && (
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
