import React from "react";

const SubscribeEmail = () => {
  return (
    <div className="w-full flex-col md:flex md:flex-row md:items-center md:justify-between px-4 md:px-10 py-4 md:py-6">
      <p className="text-darkGrey text-2xl tracking-wide font-medium py-6 mt-6">
        Sign up and get exclusive <br /> special deals
      </p>

      <div className="w-full md:w-2/5 flex items-center">
        <input
          type="text"
          className="w-full text-mainDark px-4 py-4 font-semibold rounded-s-md outline-none border-none"
        />
        <button className="bg-darkBlue1 text-sm text-mainWhite font-normal cursor-pointer px-6 py-2 rounded-e-md">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SubscribeEmail;
