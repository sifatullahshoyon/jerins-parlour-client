import React from 'react';
import Title from '../../../components/Title';
import Header from '../Header';
import Services from '../Services';
import Professionally from '../Professionally';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Title title="Home" />   
            <Header />
            <Services />
            <Professionally />
            <Testimonials />
        </div>
    );
};

export default Home;