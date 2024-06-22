import React, { useContext } from 'react';
import Title from '../../../../components/Title';
import { AuthContext } from '../../../../providers/AuthProviders';

const Review = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
        <Title title='Review'/>
        <div className='flex flex-row flex-wrap justify-between items-center p-4'>
            <p className='font-Poppins font-semibold text-xl text-text-dark'>Review</p>
            <p className='font-Poppins font-semibold text-xl text-text-dark'>{user?.displayName}</p>
        </div>
        <div className='h-screen bg-[#F4F7FC] w-full p-5'>
            <form action="">
                <div>
                <input className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" />
                </div>
            </form>
        </div>
    </div>
    );
};

export default Review;