import React from 'react';

type Props = {
  menuOpen: boolean;
};

const MobileNav = ({ menuOpen }: Props) => {
  return (
    <div
      id="mobileMenu"
      className={menuOpen ? 'mobileMenu' : 'mobileMenu -translate-y-full'}
    >
      <nav>
        <ul>
          <li>Hope</li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
