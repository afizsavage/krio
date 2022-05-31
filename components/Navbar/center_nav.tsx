import SearchBar from './search_bar';
import { SearchType } from './types';

interface Props extends SearchType {
  menuOpen: boolean;
}

const CenterNav = ({
  activeSearch,
  searchValue,
  menuOpen,
  setsearchValue,
}: Props) => {
  return (
    <div className="flex-1 h-full w-full flex items-center justify-center">
      {!activeSearch && <span className="text-gray-800">Logo</span>}
      {activeSearch && !menuOpen && (
        <div className="flex-shrink-0 h-full flex items-center">
          <SearchBar
            searchValue={searchValue}
            activeSearch={activeSearch}
            setsearchValue={setsearchValue}
          />
        </div>
      )}
    </div>
  );
};

export default CenterNav;
