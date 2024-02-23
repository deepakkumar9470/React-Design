import React from "react";

const OrangeButton = ({ children, iconUrl, iconTitle, status }) => {
  return (
    <>
      {status === true ? (
        <div
          className="bg-orangeClr flex items-center 
        gap-2 rounded-r-md px-2 py-1 cursor-pointer absolute top-[-2%] -left-4 md:top-[-5%] md:-left-2"
        >
          <img src={iconUrl} alt={iconTitle} />
          <span className="text-mainWhite text-md font-normal">{children}</span>
        </div>
      ) : null}
    </>
  );
};

export default OrangeButton;
