import React from "react";
import Title from "../../../components/Title";
import Header from "../Header";
import Services from "../Services";
import Professionally from "../Professionally";
import Testimonials from "../Testimonials/Testimonials";
import ContactUs from "../ContactUs/ContactUs";
import Login from "../Login/Login";

const Home = () => {
  return (
    <>
      <Title title="Home" />
      <Header />
      <Services />
      <Professionally />
      <Testimonials />
      <ContactUs />
      {/* <Login /> */}
    </>
  );
};

export default Home;
