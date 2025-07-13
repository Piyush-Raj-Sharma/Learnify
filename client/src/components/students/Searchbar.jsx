import { assets } from "../../assets/assets";

const Searchbar = () => {
  return (
    <form className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white dark:bg-gray-800 border border-gray-500/20 dark:border-gray-600 rounded transition-colors duration-300">
      <img
        src={assets.search_icon}
        alt="searchIcon"
        className="md:w-auto w-10 px-3 invert-0 dark:invert"
      />
      <input
        type="text"
        placeholder="Search for courses"
        className="w-full h-full outline-none text-gray-500/80 dark:text-white dark:placeholder-gray-400 bg-transparent"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
