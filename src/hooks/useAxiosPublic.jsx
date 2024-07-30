import React from 'react';
import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://jerins-parlour-server-sooty.vercel.app'
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;