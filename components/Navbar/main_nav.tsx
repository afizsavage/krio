import { useState } from 'react';
import LeftNav from './left_nav';

import MenuButton from './menu_button';
import MobileNav from './mobile_nav';
import RightNav from './right_nav';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <header role="banner" className="header">
      <div className="lg:mx-auto z-40 w-auto">
        <div className="relative bg-white z-50 flex items-center justify-between h-14 w-full">
          <MenuButton
            menuOpen={menuOpen}
            activeSearch={activeSearch}
            setMenuOpen={setMenuOpen}
          />
          <LeftNav
            activeSearch={activeSearch}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <RightNav
            activeSearch={activeSearch}
            setActiveSearch={setActiveSearch}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
      <MobileNav menuOpen={menuOpen} />
    </header>
  );
};

export default Navbar;
