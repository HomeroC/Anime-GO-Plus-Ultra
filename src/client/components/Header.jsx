import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="p-2 flex justify-between bg-[#F57621] fixed top-0 w-full z-10">
        <Menu />
      <h1>Anime GO "Plus Ultra"</h1>
        <SearchBar />
    </div>
  );
}

export default Header;
