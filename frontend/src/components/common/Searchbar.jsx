import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const Searchbar = () => {
  const [searchterm, setserchterm] = useState("");
  const [isopen, setisopen] = useState(false);

  const handlesearchtoggle = () => {
    setisopen(!isopen);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isopen ? "absolute top-0 left-0 w-full bg-white h-24 z-50 : " : "w-auto"
      }`}
    >
      {isopen ? (
        <form className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchterm}
              className="bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
          <button>
            <HiMiniXMark />
          </button>
        </form>
      ) : (
        <button onClick={handlesearchtoggle}>
          <HiMagnifyingGlass className="h-6 w-6 " />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
