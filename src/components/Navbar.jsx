import React, { useState } from "react";

import search from "../assets/search.svg";
import { navLinks } from "../data/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-secondaryblack flex items-center justify-center gap-16 px-20 py-4">
      <div className="w-full md:w-[300px] flex items-center gap-2 relative">
        <img className="absolute left-2" src={search} alt="search" />
        <input
          className="w-full bg-mainWhite text-md font-medium px-10 py-2 rounded-md border-1 outline-none"
          type="text"
          placeholder="Search.."
        />
      </div>

      <div className="hidden md:block md:flex md:items-center md:gap-10">
        {navLinks.map((item, i) => (
          <Link
            className="text-sm text-lightGrey1 hover:text-lightGrey2 transition-all ease-linear duration-75
                font-medium cursor-pointer"
            to="/"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
