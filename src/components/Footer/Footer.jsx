import React from "react";
import arrow from "../../assets/arrow_down.svg";
import { footerLinksCat, footerLinksContact } from "../../data/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-secondaryblack flex-col md:flex md:flex-row md:justify-between gap-10 px-20 md:px-80 py-10">
      <div className="flex flex-col gap-4 md:gap-2 mb-4 md:mb-0">
        <p className="text-mainWhite text-md font-medium cursor-pointer uppercase">
          categories
        </p>
        {footerLinksCat.map((item, i) => (
          <Link
            className="text-lightGrey2 text-sm cursor-pointer hover:text-mainWhite"
            to="/"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4 md:gap-2 mt-4 md:mt-0">
        <p className="text-mainWhite text-md font-medium cursor-pointer uppercase">
          contact
        </p>
        {footerLinksContact.map((item, i) => (
          <Link
            className="text-lightGrey2 text-sm cursor-pointer hover:text-mainWhite"
            to="/"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2 cursor-pointer mt-4 md:mt-0">
        <p className="text-lightGrey1 text-sm hover:text-mainWhite">
          United States
        </p>
        <img src={arrow} alt="" arrow />
      </div>
    </div>
  );
};

export default Footer;
