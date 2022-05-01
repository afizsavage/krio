import { BiSearch } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

type Props = {
  activeSearch: boolean;
  menuOpen: boolean;
  setActiveSearch: (e: boolean) => void;
  setSearchValue: (e: string) => void;
};

const RightNav = ({
  activeSearch,
  setActiveSearch,
  setSearchValue,
  menuOpen,
}: Props) => {
  const deactivateSearch = () => {
    setActiveSearch(false);
    setSearchValue('');
  };

  const toggleSearch = () => {
    activeSearch === false ? setActiveSearch(true) : deactivateSearch();
  };

  return (
    <div
      className={
        menuOpen
          ? 'hidden'
          : 'absolute inset-y-0 right-0 flex items-center inset-auto pr-0 mr-3'
      }
    >
      <button
        onClick={toggleSearch}
        className="w-10 h-10 flex justify-center items-center"
      >
        <BiSearch
          className={activeSearch ? 'hidden' : 'w-6 h-6 text-gray-400'}
        />
        {activeSearch && <IoMdClose className="w-6 h-6 text-gray-400" />}
      </button>
    </div>
  );
};

export default RightNav;
