import React from "react";

const RelatedButton = ({ children }) => {
  return (
    <button
      className="bg-darkBlue1 
              text-mainWhite text-md 
                font-normal tracking-wider rounded-md 
                px-20 py-2 my-4 outlinr-none hover:bg-darkBlue3 transition-all ease-linear duration-100"
    >
      {children}
    </button>
  );
};

export default RelatedButton;
