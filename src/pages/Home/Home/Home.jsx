import React from "react";
import Title from "../../../components/Title";
import Header from "../Header";
import Professionally from "../Professionally";
import Testimonials from "../Testimonials/Testimonials";
import ContactUs from "../ContactUs/ContactUs";
import Service from "../Services/Service";

const Home = () => {
  return (
    <>
      <Title title="Home" />
      <Header />
      <Service />
      <Professionally />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
