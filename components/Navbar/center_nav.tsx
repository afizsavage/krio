import SearchBar from './search_bar';
import { SearchType } from './types';

const CenterNav = ({
  activeSearch,
  searchValue,
  setsearchValue,
}: SearchType) => {
  return (
    <div className="flex-1 h-full w-full flex items-center justify-center">
      {!activeSearch && <span className="text-gray-800">Logo</span>}
      <div
        className={
          activeSearch ? 'flex-shrink-0 h-full flex items-center' : 'hidden'
        }
      >
        <SearchBar
          searchValue={searchValue}
          activeSearch={activeSearch}
          setsearchValue={setsearchValue}
        />
      </div>
    </div>
  );
};

export default CenterNav;
