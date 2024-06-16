import React from "react";

const PrimaryBtn = ({ children, width }) => {
  return (
    <div>
      <button
        className={`${width} h-11 rounded bg-primary-color text-white text-base font-Poppins font-medium text-balance p-2 cursor-pointer`}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
