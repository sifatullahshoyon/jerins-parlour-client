import React, { useEffect, useState } from "react";
import PrimaryBtn from "../../../components/Button/PrimaryBtn";
import Container from "../../../components/Shared/Container";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Services from "../Services";

const Service = () => {
  const [serviceData, setServiceData] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axiosSecure.get("/services");
        setServiceData(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchServices();
  }, [axiosSecure]);
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-center font-Poppins font-bold text-3xl pt-10 py-20 text-balance text-text-color">
          Our Awesome <span className="text-primary-color">Services</span>
        </h1>
        <div className="md:flex md:flex-row justify-center gap-20 space-y-4 flex-wrap">
          {serviceData?.map((data, index) => (
            <Services key={data._id} service={data} index={index} />
          ))}
        </div>
        <div className="text-center pt-10">
          <PrimaryBtn width="w-[170px]">Explore more</PrimaryBtn>
        </div>
      </Container>
    </section>
  );
};

export default Service;
