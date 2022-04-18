import { useState, useEffect } from 'react';
import MenuButton from './menu_button';
import MobileNav from './mobile_nav';
import RightNav from './right_nav';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      role="banner"
      className={
        scrollPosition <= 100
          ? 'header'
          : 'header text-gray-700 bg-white border-1 shadow-md'
      }
    >
      <div className="lg:mx-auto z-40 w-auto">
        <div className="relative bg-white md:bg-transparent z-50 flex items-center justify-between h-16 md:h-18 lg:h-20 w-full">
          <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <RightNav />
        </div>
      </div>
      <MobileNav menuOpen={menuOpen} />
    </header>
  );
};

export default Navbar;
