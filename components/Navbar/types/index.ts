export type SearchType = {
  activeSearch: boolean;
  searchValue: string;
  setsearchValue: (e: string) => void;
};

export type MenuType = {
  setMenuOpen: (e: boolean) => void;
  menuOpen: boolean;
};
