import React, { useState } from "react";
import PrimaryBtn from "../../../components/Button/PrimaryBtn";
import Container from "../../../components/Shared/Container";
import { toast } from "react-toastify";
import Services from "../Services";
import useServices from "../../../hooks/useServices";

const Service = () => {
  const [services, refetch , isPending] = useServices();
  const [showAll, setShowAll] = useState(false); // State to track whether to show all services
 
 const handleToggleShow = () => {
    setShowAll(!showAll); // Toggle between showing all services and showing only 3
  };

  return (
    <section className="py-20">
      <Container>
        <h1 className="text-center font-Poppins font-bold text-3xl pt-10 py-20 text-balance text-text-color">
          Our Awesome <span className="text-primary-color">Services</span>
        </h1>
        <div className="md:flex md:flex-row justify-center gap-20 space-y-4 flex-wrap">
          {services?.slice(0, showAll ? services.length : 3).map((data, index) => (
            <Services key={data._id} service={data} index={index} />
          ))}
        </div>
        <div onClick={handleToggleShow} className="text-center pt-20">
          <PrimaryBtn width="w-[170px]">
            {showAll ? "Show Less" : "Explore More"}
          </PrimaryBtn>
        </div>
      </Container>
    </section>
  );
};

export default Service;
