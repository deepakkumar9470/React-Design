import React from "react";
import { filterlinksData } from "../../data/data";
import { Link } from "react-router-dom";

const Filterlinks = () => {
  return (
    <div className="w-full flex items-center flex-wrap gap-4 md:gap-12 px-2 py-4 mx-auto">
      {filterlinksData.map((item, i) => (
        <Link
          to="/"
          className="bg-mainWhite text-darkMedium text-sm 
                    font-medium cursor-pointer rounded-lg px-4 py-1"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Filterlinks;
