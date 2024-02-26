import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-2 flex justify-between bg-[#F57621] fixed top-0 w-full z-10 ">
      <h1>Anime GO "Plus Ultra"</h1>
      <nav className="flex p-4 gap-10">
        <Link to="/home">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/login">Login</Link>
      </nav>
      
    </div>
  );
}

export default Header;
