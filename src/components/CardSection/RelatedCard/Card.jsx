import React from "react";
import weblaptop from "../../../assets/web_laptop.png";
import RelatedButton from "../../ButtonContainer/RelatedButton/RelatedButton";

const Card = ({ item }) => {
  return (
    <div className="max-w-md bg-mainWhite mb-4 md:mb-0 flex flex-col gap-2 py-4 px-4 rounded-lg">
      <div className="w-[150px] mx-auto">
        <img
          className="w-full object-contain"
          src={weblaptop}
          alt="weblaptop"
        />
      </div>

      <div className="flex items-center gap-4 py-4">
        <span
          className="bg-lightBlue2 text-darkBlue1 text-sm font-normal
        rounded-md px-1 py-1 cursor-pointer"
        >
          {item.offer}% off
        </span>
        <span
          className="bg-lightBlue2 text-darkBlue1 text-sm font-normal
        rounded-md px-1 py-1 cursor-pointer"
        >
          {item.time}
        </span>
      </div>

      <h3 className="text-lg text-darkMedium text-center font-semibold tracking-wide opacity-100 cursor-pointer">
        {item.title}
      </h3>
      <p className="text-md text-darkMedium font-medium tracking-wide cursor-pointer opacity-70">
        {item.desc}
      </p>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-darkGrey">
          <p className="text-2xl font-semibold">$</p>
          <p className="text-2xl font-semibold">{item.offPrice}</p>
        </div>
        <div className="flex items-center gap-1 text-darkGrey2">
          <p className="text-sm font-medium">$</p>
          <p className="text-sm font-medium">{item.actualPrice}</p>
        </div>
        <p className="text-sm text-red1 font-medium">( {item.offer}% Off)</p>
      </div>
      <RelatedButton>View Deal</RelatedButton>
    </div>
  );
};

export default Card;
