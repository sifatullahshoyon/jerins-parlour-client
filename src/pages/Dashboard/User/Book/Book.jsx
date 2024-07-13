import React, { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProviders';
import Title from '../../../../components/Title';
import PrimaryBtn from '../../../../components/Button/PrimaryBtn';
import { useForm } from 'react-hook-form';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Book = () => {
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data)
    return (
        <div>
            <Title title='Book'/>
            <div className='flex flex-row flex-wrap justify-between items-center p-4'>
                <p className='font-Poppins font-semibold text-xl text-text-dark'>Book</p>
                <p className='font-Poppins font-semibold text-xl text-text-dark'>{user?.displayName}</p>
            </div>
            <div className='h-screen bg-[#F4F7FC] w-full p-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>
                <div>
                <input defaultValue={user?.displayName} readOnly {...register(user?.displayName)} className="rounded-lg bg-white sm:w-2/3 md:w-[570px] px-2 py-3 text-text-gray focus:outline-none" type="text"  required />
                </div>
                <div className='my-4'>
                <input defaultValue={user?.email} readOnly {...register(user?.email)} className="rounded-lg bg-white sm:w-2/3 md:w-[570px] px-2 py-3 text-text-gray focus:outline-none" type="email" placeholder='Company Name ,  Designation' required />
                </div>
                <div>
                    <textarea {...register('textarea')} className="rounded-lg bg-white h-28 sm:w-2/3 md:w-[570px] px-2 py-3 text-text-gray focus:outline-none resize-none" type="text" placeholder='Description' required></textarea>
                </div>
                <div className='my-5'>
                    <PrimaryBtn width="w-[170px] ">Submit</PrimaryBtn>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Book;