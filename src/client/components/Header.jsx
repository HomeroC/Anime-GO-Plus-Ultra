import React from "react";

function Header() {
  return (
    <div className="p-2 flex justify-between bg-[#6855E0] ">
      <h1>Anime GO "Plus Ultra"</h1>
      <nav>
        <ul className="flex flex-row gap-10 p-4">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/watchlist">Watchlist</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
