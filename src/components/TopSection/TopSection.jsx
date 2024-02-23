import React from "react";
import circlecheck from "../../assets/circlecheck.svg";
import circleexc from "../../assets/circleexc.svg";
import arrowdown from "../../assets/arrow_down.svg";
const TopSection = () => {
  return (
    <div
      className="w-full flex items-center justify-between 
                    px-2 py-2 
                    border-t-2 border-b-2
                  border-lightGrey1 "
    >
      <div className="w-full flex items-center gap-2">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={circlecheck} alt="circlecheck" />
          <span className="hidden md:block text-darkMedium text-sm font-medium">
            Last Updated
          </span>
          <span>February 23, 2023</span>
        </div>

        <span className="hidden md:block ">-</span>

        <div className="hidden md:block  md:flex md:items-center gap-2 cursor-pointer">
          <img src={circleexc} alt="circleexc" />
          <span className="text-darkMedium text-sm font-medium">
            Advertising Disclosure
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-darkMedium text-sm font-medium">
          Top Relevant
        </span>
        <img src={arrowdown} alt="arrowdown" />
      </div>
    </div>
  );
};

export default TopSection;
