/* eslint-disable react/prop-types */
// import { Search } from "react-iconly";
import { FaSearch } from "react-icons/fa";
export function Searchbar({ onSearch, maxLength = 25, className }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={`bg-[#F0F0F0] rounded-full flex items-center px-5 py-1 w-5/12 ${className}`}>
      <div className="icon mr-2">
        <FaSearch size={18} className="text-[#79C4EE]"  />
      </div>
      <input
        type="text"
        placeholder="Cari disini..."
        className="w-full h-full px-4 py-2 bg-transparent border-none focus:outline-none"
        onChange={handleSearch}
        maxLength={maxLength}
      />
    </div>
  );
}
