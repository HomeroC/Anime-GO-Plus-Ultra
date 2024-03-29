import React, { useState, useEffect, useRef, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthContext from "../state/AuthContext";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsOpen(!isOpen)
    dispatch({type: "LOGOUT"})
  }

  return (
    <div>
      <div className=" top-0 left-0 flex items-center justify-center h-12 w-12  text-[#23252B] cursor-pointer">
        <FaBars className="z-[99]" size={20} onClick={toggleMenu} />
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-gray-800 bg-opacity-75 z-50">
          <div className="flex flex-col items-center justify-center h-full">
            <Link
              to="/home"
              onClick={toggleMenu}
              className="w-[50%] flex justify-center items-center rounded-full showdow-lg bg-gray-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-white"
            >
              Home
            </Link>
            <Link
              to="/watchlist"
              onClick={toggleMenu}
              className="w-[50%] flex justify-center items-center rounded-full showdow-lg bg-gray-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-white"
            >
              Watchlist
            </Link>
            <Link
              to="/login"
              onClick={handleLogout}
              className="w-[50%] flex justify-center items-center rounded-full showdow-lg bg-red-400 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-white"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
