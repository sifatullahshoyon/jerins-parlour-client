import React from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import modelPic from "../../assets/images/model.png";
import Container from "../../components/Shared/Container";

const Header = () => {
  return (
    <header className="bg-secondary-color pt-28 pb-8">
      <Container>
        <div className="lg:flex items-center justify-between gap-6 space-y-6">
          <div className="ml-10">
            <h1 className="font-bold font-Poppins sm:text-2xl md:text-3xl lg:text-5xl leading-tight tracking-wide text-balance">
              BEAUTY SALON <br /> FOR EVERY WOMEN
            </h1>
            <p className="py-10 font-normal font-Poppins sm:text-sm md:text-base text-primary leading-7 text-balance">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat{" "}
            </p>
            <PrimaryBtn
              props="Get an Appoin tment"
              width="lg:w-[230px] md:w-[200px] sm:w-[150px]"
            />
          </div>
          <div className="lg:pr-80">
            <img src={modelPic} alt="model picture" className="object-cover" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
