import React from 'react';
import { BiSearch } from 'react-icons/bi';
import MenuButton from './menu_button';

type Props = {
  menuOpen: boolean;
  activeSearch: boolean;
  setMenuOpen: (e: boolean) => void;
};

const LeftNav = ({ menuOpen, activeSearch, setMenuOpen }: Props) => {
  return (
    <div className="tMBWrapper ">
      <MenuButton
        activeSearch={activeSearch}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {activeSearch && (
        <button className="cursor-default z-50 text-gray-400 focus:outline-none w-10 h-10 relative flex justify-center items-center">
          <BiSearch className=" w-6 h-6 text-gray-400" />
        </button>
      )}
    </div>
  );
};

export default LeftNav;
