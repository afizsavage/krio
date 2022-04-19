import { useState } from 'react';
import CenterNav from './center_nav';

import LeftNav from './left_nav';
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
          <LeftNav
            menuOpen={menuOpen}
            activeSearch={activeSearch}
            setMenuOpen={setMenuOpen}
          />
          <CenterNav
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
