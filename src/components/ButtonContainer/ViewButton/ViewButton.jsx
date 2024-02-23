import React from "react";

const ViewButton = ({ children }) => {
  return (
    <button
      className="w-full mt-4 md:mt-60 bg-darkBlue1 
              text-mainWhite text-md 
                font-normal racking-wider rounded-md 
                px-20 py-4 outlinr-none hover:bg-darkBlue3 transition-all ease-linear duration-100"
    >
      {children}
    </button>
  );
};

export default ViewButton;
