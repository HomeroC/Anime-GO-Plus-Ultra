import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";



const SearchBar = ({setSearch}) => {
  const [isInputVisible, setInputVisible] = useState(false);
  // const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  const baseUrl = "https://api.jikan.moe/v4";

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get(`${baseUrl}/anime?q=${inputRef.current.value}`)
      .then((res) => {
      let anime = res.data.data;
      setSearch(anime);
    });
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
          ref={inputRef}
          className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
          onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
        />
      )}
    </div>
  );
};

export default SearchBar;
