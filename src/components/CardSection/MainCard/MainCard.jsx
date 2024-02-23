import React from "react";
import { accordianLinksData, cardsData } from "../../../data/data";
import arrow_right from "../../../assets/arrow_right.svg";
import { Link } from "react-router-dom";
import Card from "./Card/Card";
const MainCard = () => {
  return (
    <div>
      <div className="w-full flex items-center gap-6 px-4 md:px-0 md:gap-6">
        {accordianLinksData.map((item, i) => (
          <Link
            to="/"
            className="flex items-center gap-1 md:gap-2 cursor-pointer"
          >
            <span className="text-sm text-darkGrey font-medium">
              {item.title}
            </span>
            <img src={arrow_right} alt="arrow_right" />
          </Link>
        ))}
      </div>

      <div className="w-full  md:flex  md:flex-col gap-8 py-10">
        {cardsData.map((item, i) => (
          <Card key={item.headTitle} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainCard;
