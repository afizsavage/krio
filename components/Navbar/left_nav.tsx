import SearchBar from './search_bar';

type Props = {
  activeSearch: boolean;
};

const LeftNav = ({ activeSearch }: Props) => {
  return (
    <div className="flex-1 h-full w-full flex items-center justify-center">
      {!activeSearch && <span className="text-gray-800">Logo</span>}
      <div
        className={
          activeSearch ? 'flex-shrink-0 h-full flex items-center' : 'hidden'
        }
      >
        <SearchBar activeSearch={activeSearch} />
      </div>
    </div>
  );
};

export default LeftNav;
