import { MenuType, SearchType } from './types';

interface Props extends MenuType, SearchType {
  setActiveSearch: (e: boolean) => void;
}

const MenuButton = ({
  menuOpen,
  searchValue,
  activeSearch,
  setMenuOpen,
  setsearchValue,
  setActiveSearch,
}: Props) => {
  const handleClosingMenu = () => {
    setMenuOpen(false);
    if (searchValue.length > 0) {
      setsearchValue('');
    }
  };

  const handleOpeningMenu = () => {
    setMenuOpen(true);
    // setActiveSearch(true);
  };

  const toggleMenu = () => {
    menuOpen === false ? handleOpeningMenu() : handleClosingMenu();
  };
  return (
    <button
      id="menuBtn"
      onClick={toggleMenu}
      className={
        activeSearch
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
            !menuOpen ? 'tMBtnIn1 -translate-y-1.5' : 'tMBtnIn1 rotate-45'
          }
        ></span>
        <span
          aria-hidden="true"
          className={!menuOpen ? 'tMBtnIn1' : 'z-50 opacity-0'}
        ></span>
        <span
          aria-hidden="true"
          className={
            !menuOpen ? 'tMBtnIn1 translate-y-1.5 ' : 'tMBtnIn1 -rotate-45'
          }
        ></span>
      </div>
    </button>
  );
};

export default MenuButton;
