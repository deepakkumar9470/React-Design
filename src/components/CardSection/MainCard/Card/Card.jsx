import React from "react";
import weblaptop from "../../../../assets/web_laptop.png";
import bluearrow_down from "../../../../assets/bluearrow_down.svg";
import stars from "../../../../assets/stars.svg";
import circleexc from "../../../../assets/circleexc.svg";
import ViewButton from "../../../ButtonContainer/ViewButton/ViewButton";
import OrangeButton from "../../../ButtonContainer/OrangeButton/OrangeButton";

const Card = ({ item }) => {
  return (
    <div
      className="w-full bg-mainWhite md:flex 
                    md:justify-between gap-4 md:gap-10 px-4 md:px-14 py-4 
                    rounded-xl relative"
    >
      <span
        className="w-10 h-10 bg-mainWhite text-lightGrey2 text-md font-semibold 
            flex items-center justify-center rounded-full cursor-pointer border
             border-lightGrey2 absolute top-10 -left-6"
      >
        {item.count}
      </span>

      <OrangeButton
        iconUrl={item.iconUrl}
        iconTitle={item.iconTitle}
        status={item.status}
      >
        {item.childTitle}
      </OrangeButton>

      <div className="w-1/2 mx-auto md:w-[400px] flex flex-col gap-2 items-center pt-4 md:pt-20 cursor-pointer">
        <img className="w-full" src={item.imageUrl} alt="weblaptop" />
        <span className="text-lightGrey3 text-sm font-medium">Builder</span>
      </div>

      <div className="flex flex-col gap-1 text-darkMedium text-md">
        <div>
          <h3 className="text-md font-bold">{item.headTitle}</h3> {"-"}
          <p className="text-sm font-medium text-justify tracking-wide">
            {item.headDesc}
          </p>
        </div>

        <div className="py-1">
          <h3 className="text-md font-bold">{item.childTitle}</h3>-
          <span className="text-sm font-medium text-justify tracking-wide">
            {item.childDesc}
          </span>
        </div>

        <div className="flex gap-1 items-center mt-6 cursor-pointer">
          <span className="text-darkBlue1 text-sm font-medium">Show More</span>
          <img src={bluearrow_down} alt="bluearrow_down" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-20 py-2 px-3 ">
        <div className="hidden md:block flex flex-col gap-2 items-center top-0 bg-lightBlue rounded-b-lg absolute py-2 px-5 cursor-pointer">
          <img
            src={circleexc}
            width={10}
            height={10}
            alt="circleexc"
            className="absolute top-1 right-4"
          />
          <p className="text-darkBlue2 text-center text-3xl font-medium">
            {item.rating}
          </p>
          <span className="text-darkBlue2 text-sm font-medium">
            {item.ratingStatus}
          </span>
          <img className="py-2" src={stars} alt="stars" />
        </div>

        <ViewButton>View</ViewButton>
      </div>
    </div>
  );
};

export default Card;
