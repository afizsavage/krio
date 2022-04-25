import { MenuType, SearchType } from './types';

const MenuButton = (Props: MenuType & SearchType) => {
  const handleClosingMenu = () => {
    Props.setMenuOpen(false);
    if (Props.searchValue.length > 0) {
      Props.setsearchValue('');
    }
  };

  const toggleMenu = () => {
    Props.menuOpen === false ? Props.setMenuOpen(true) : handleClosingMenu();
  };
  return (
    <button
      id="menuBtn"
      onClick={toggleMenu}
      className={
        Props.activeSearch
          ? 'hidden'
          : 'z-50 text-gray-400 focus:outline-none w-10 h-10 relative'
      }
      aria-expanded="false"
    >
      <span className="sr-only">Open and close main menu</span>
      <div className="tMBtnInWrapper">
        <span
          aria-hidden="true"
          className={
            !Props.menuOpen ? 'tMBtnIn1 -translate-y-1.5' : 'tMBtnIn1 rotate-45'
          }
        ></span>
        <span
          aria-hidden="true"
          className={!Props.menuOpen ? 'tMBtnIn1' : 'z-50 opacity-0'}
        ></span>
        <span
          aria-hidden="true"
          className={
            !Props.menuOpen
              ? 'tMBtnIn1 translate-y-1.5 '
              : 'tMBtnIn1 -rotate-45'
          }
        ></span>
      </div>
    </button>
  );
};

export default MenuButton;
