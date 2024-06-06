import React from "react";
import Title from "../../../components/Title";
import Container from "../../../components/Shared/Container";
import { useLocation } from "react-router-dom";
import PrimaryBtn from "../../../components/Button/PrimaryBtn";

const ContactUs = () => {
  const location = useLocation();
  const isLogin = location?.pathname?.includes("contact-us");
  return (
    <section className={`bg-secondary-color ${isLogin ? "pt-28 pb-8" : ""}`}>
      <Title title="Contact Us" />
      <Container>
        <div className="flex flex-col justify-center pt-20 pb-5">
          <h1 className="text-balance sm:xl lg:text-4xl md:3xl leading-snug tracking-wide font-bold font-Poppins text-text-color text-center">
            Let us handle your <br />
            project, professionally.
          </h1>
          <form action="" className="mx-auto pt-20">
            <div>
              <div className="flex flex-row gap-8">
                <input
                  className="rounded-lg bg-white w-1/2 lg:w-80 px-2 py-2 text-text-gray focus:outline-none"
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  className="rounded-lg bg-white w-1/2 lg:w-80 px-2 py-2 text-text-gray focus:outline-none"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="flex flex-row gap-8 my-8">
                <input
                  className="rounded-lg bg-white w-1/2 lg:w-80 px-2 py-2 text-text-gray focus:outline-none"
                  type="text"
                  placeholder="Email Address"
                  required
                />
                <input
                  className="rounded-lg bg-white w-1/2 lg:w-80 px-2 py-2 text-text-gray focus:outline-none"
                  type="text"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="w-full my-8">
                <textarea
                  rows="5"
                  className="rounded-lg bg-white w-full lg:w-[680px] px-2 py-2 text-text-gray focus:outline-none resize-none"
                  type="text"
                  placeholder="Your Massage"
                ></textarea>
              </div>
            </div>
          </form>
          <div className="text-center mb-10">
            <PrimaryBtn props="Send Message" className="" width="w-[172px]" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
