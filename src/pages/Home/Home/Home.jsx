import React from 'react';
import Title from '../../../components/Title';
import Header from '../Header';
import Services from '../Services';
import Professionally from '../Professionally';

const Home = () => {
    return (
        <div>
            <Title title="Home" />   
            <Header />
            <Services />
            <Professionally />
        </div>
    );
};

export default Home;