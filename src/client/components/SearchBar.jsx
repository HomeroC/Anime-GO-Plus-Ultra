import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div className="flex items-center">
      <div
        className="cursor-pointer p-2 text-gray-600 hover:text-gray-800 "
        onClick={toggleInputVisibility}
      >
        <FaSearch className="w-6 h-6" />
      </div>
      {isInputVisible && (
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
        />
      )}
    </div>
  );
};

export default SearchBar;
