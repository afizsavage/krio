import { BiSearch } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

type Props = {
  activeSearch: boolean;
  setActiveSearch: (e: boolean) => void;
};

const RightNav = ({ activeSearch, setActiveSearch }: Props) => {
  const toggleSearch = () => {
    activeSearch === false ? setActiveSearch(true) : setActiveSearch(false);
  };

  return (
    <div className="absolute inset-y-0 right-0 flex items-center static inset-auto pr-0 mr-3">
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
