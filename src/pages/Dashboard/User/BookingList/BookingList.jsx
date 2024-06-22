import React, { useContext } from 'react';
import Title from '../../../../components/Title';
import { AuthContext } from '../../../../providers/AuthProviders';

const BookingList = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Title title='Booking List'/>
            <div className='flex flex-row flex-wrap justify-between items-center p-4'>
                <p className='font-Poppins font-semibold text-xl text-text-dark'>Booking List</p>
                <p className='font-Poppins font-semibold text-xl text-text-dark'>{user?.displayName}</p>
            </div>
            <div className='h-screen bg-[#F4F7FC] w-full p-5'>
                cart
            </div>
        </div>
    );
};

export default BookingList;