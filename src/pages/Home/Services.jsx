import React from "react";
import Container from "../../components/Shared/Container";
import icon1 from "../../assets/images/icon/icon-1.png";
import icon2 from "../../assets/images/icon/icon-2.png";
import icon3 from "../../assets/images/icon/icon-3.png";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Services = () => {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-center font-Poppins font-bold text-3xl pt-10 py-20 text-balance text-text-color">
          Our Awesome <span className="text-primary-color">Services</span>
        </h1>
        <div className="md:flex md:flex-row justify-center gap-20 space-y-4 flex-wrap">
          <div className="w-[370px] flex flex-col justify-center items-center font-Poppins py-5 mx-auto">
            <img src={icon1} alt="services icon" />
            <h2 className="text-xl text-text-color font-semibold py-2">
              Hair Color & Styling
            </h2>
            <h6 className="text-primary-color text-xl font-medium pb-3">
              $199
            </h6>
            <p className="w-72 leading-7 text-center font-light text-base">
              Amazing flyers, social media posts and brand representations that
              would ma ke your brand stand out.
            </p>
          </div>
          <div className="w-[370px] flex flex-col justify-center items-center font-Poppins shadow-xl py-5 rounded mx-auto">
            <img src={icon2} alt="services icon" />
            <h2 className="text-xl text-text-color font-semibold py-2">
              Anti Age Face Treatment
            </h2>
            <h6 className="text-primary-color text-xl font-medium pb-3">$99</h6>
            <p className="w-72 leading-7 text-center font-light text-base">
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
          <div className="w-[370px] flex flex-col justify-center items-center font-Poppins py-5 mx-auto">
            <img src={icon3} alt="services icon" />
            <h2 className="text-xl text-text-color font-semibold py-2">
              Skin Care Treatment
            </h2>
            <h6 className="text-primary-color text-xl font-medium pb-3">
              $299
            </h6>
            <p className="w-72 leading-7 text-center font-light text-base">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
        </div>
        <div className="text-center pt-10">
          <PrimaryBtn width="w-[170px]">Explore more</PrimaryBtn>
        </div>
      </Container>
    </section>
  );
};

export default Services;
