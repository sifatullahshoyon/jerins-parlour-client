import React from "react";
import Container from "../../components/Shared/Container";
import model2 from "../../assets/images/model-1.png";
import CountUp from 'react-countup';

const Professionally = () => {
  return (
    <section className="py-20 px-10 bg-secondary-color">
      <Container>
        <div className="md:flex md:flex-row flex-wrap gap-20 space-y-10 items-center justify-center">
          {/* Img */}
          <div>
            <img src={model2} className="object-cover" alt="model picture" />
          </div>
          {/* Content */}
          <div className="font-Poppins lg:mr-72">
            <h1 className="text-4xl font-semibold tracking-wide text-balance leading-tight pb-5">
              Let us handle your <br /> screen{" "}
              <span className="text-primary-color text-balance">
                Professionally
              </span>
              .
            </h1>
            <p className="text-sm font-light leading-7 pb-10">
              With well written codes, we build amazing apps for all <br />{" "}
              platforms, mobile and web apps in general ipsum.Lorem ipsum <br />{" "}
              dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo
              ipsum.
            </p>
            <div className="flex flex-wrap justify-between gap-2">
              <div className="pb-2">
                <h1 className="text-[42px] font-bold text-primary-color">
                <CountUp end={500} duration={10}/>
                  +
                </h1>
                <span className="text-base font-normal text-[#000000] pt-5">
                  Happy Customer
                </span>
              </div>
              <div className="mr-5">
                <h1 className="text-[42px] font-bold text-primary-color">
                <CountUp end={16} duration={10}/>
                  +
                </h1>
                <span className="text-base font-normal text-[#000000] pt-5">
                  Total Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Professionally;
