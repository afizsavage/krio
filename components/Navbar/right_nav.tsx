import { BiSearch } from 'react-icons/bi';

const RightNav = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center static inset-auto pr-0 mr-3">
      <button className="w-10 h-10 flex justify-center items-center">
        <BiSearch className="w-6 h-6 text-gray-400" />
      </button>
    </div>
  );
};

export default RightNav;
