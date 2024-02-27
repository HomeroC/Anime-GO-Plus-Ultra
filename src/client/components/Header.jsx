import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Header({setSearch}) {
  return (
    <div className="p-2 flex justify-between bg-[#F57621] fixed top-0 w-full z-10">
      <Menu />
      <Link to="/home">
        <h1>Anime GO "Plus Ultra"</h1>
      </Link>
      <SearchBar setSearch={setSearch} />
    </div>
  );
}

export default Header;
