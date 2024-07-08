import React from 'react';
import Container from './Shared/Container';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from "../assets/images/error/404.svg";
import PrimaryBtn from './Button/PrimaryBtn';


const ErrorElement = () => {
    const {error , status} = useRouteError();
    return (
        <div className='h-screen'>
            <Container>
                <div className="flex flex-col justify-center items-center">
                    <img src={errorImg ? errorImg : status} alt="404 page not found img" className='object-cover' />
                    <p className='mt-10 mb-5 text-center text-balance text-text-primary font-Poppins font-bold text-xl'>{error?.message ? error?.message : 'Page Not Found'}</p>
                    <Link to='/' ><PrimaryBtn width='w-[230px]'>Back to Home Page</PrimaryBtn></Link>
                </div>
            </Container>
        </div>
    );
};

export default ErrorElement;