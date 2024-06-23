import React from "react";

const Services = ({ service, index }) => {
  const { _id, heading, img_link, price, description } = service;

  // Determine the CSS classes to apply
  const cardClasses = `w-[370px] flex flex-col justify-center items-center font-Poppins py-5 mx-auto ${
    index === 1 ? "shadow-lg" : ""
  } hover:shadow-lg relative transition-shadow duration-300 ease-in-out group`;

  console.log("🚀 ~ Services ~ service: 9", service);

  return (
    <div className={cardClasses}>
      <img src={img_link ? img_link : "Img Not Found"} alt="services icon" />
      <h2 className="text-xl text-text-color font-semibold py-2">
        {heading ? heading : "Data Not Found"}
      </h2>
      <h6 className="text-primary-color text-xl font-medium pb-3">
        ${price ? price : "Data Not Found"}
      </h6>
      <p className="w-72 leading-7 text-center font-light text-base">
        {description ? description : "Data Not Found"}
      </p>
      <div className="group-hover:mb-2 group-hover:mt-10 group-hover:duration-100">
        <button className="absolute bottom-4 right-32 bg-blue-500 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity group-hover:duration-500 duration-300 ease-in-out">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Services;
