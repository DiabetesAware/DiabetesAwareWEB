/* eslint-disable react/prop-types */
import { Search } from "react-iconly";

export function Searchbar({ onSearch, maxLength = 25 }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="border-2 border-[#828282] rounded-md flex items-center px-2 py-2">
      <div className="icon mr-2">
        <Search size={18} primaryColor="#828282" />
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
