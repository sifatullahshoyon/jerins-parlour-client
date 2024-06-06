import React from "react";
import Container from "../Container";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary-color py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-5">
          <div>
            <div className="flex gap-2 items-center">
              <FaLocationDot className="text-white w-6 h-6" />
              <p className="text-white text-base text-balance font-medium font-Poppins ">
                H#000 (0th Floor), Road #00,
              </p>
            </div>
            <p className="text-white text-base text-balance font-medium font-Poppins ml-8">
              New DOHS, Mohakhali, Dhaka, Bangladesh
            </p>
          </div>
          <div>
            <h4 className="text-xl text-white font-Poppins font-semibold">
              Company
            </h4>
            <p className="text-white text-base text-balance font-medium font-Poppins py-5">
              parlour company
            </p>
          </div>
          <div>
            <h4 className="text-xl text-white font-Poppins font-semibold mb-4">
              Quick Links
            </h4>
            <ul>
              <li className="text-balance text-base text-white font-Poppins font-normal pt-4">
                Quick Links
              </li>
              <li className="text-balance text-base text-white font-Poppins font-normal pt-4">
                Rentals
              </li>
              <li className="text-balance text-base text-white font-Poppins font-normal pt-4">
                Sales
              </li>
              <li className="text-balance text-base text-white font-Poppins font-normal pt-4">
                Contact
              </li>
              <li className="text-balance text-base text-white font-Poppins font-normal pt-4">
                Our blog
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-white font-Poppins font-semibold">
              About Us
            </h4>
            <p className="text-[#D8D8D8] text-base text-balance font-normal font-Poppins py-5 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <div className="flex flex-row flex-wrap gap-5 mb-5">
              <FaFacebook className="w-5 h-5 text-white cursor-pointer" />
              <FaInstagram className="w-5 h-5 text-white cursor-pointer" />
              <FaLinkedin className="w-5 h-5 text-white cursor-pointer" />
              <FaYoutube className="w-5 h-5 text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
