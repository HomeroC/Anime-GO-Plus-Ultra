import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";

function Header({ setSearch }) {
  const location = useLocation();
  const inWatchlist = location.pathname === "/watchlist";

  return (
    <div
      className={
        inWatchlist
          ? "p-2 flex bg-[#F57621] justify-center fixed top-0 w-full z-10"
          : "p-2 flex justify-between bg-[#F57621] fixed top-0 w-full z-10"
      }
    >
      <Menu />

      <Link to="/home">
        <h1>Anime GO "Plus Ultra"</h1>
      </Link>

      {!inWatchlist && <SearchBar setSearch={setSearch} />}
    </div>
  );
}

export default Header;
