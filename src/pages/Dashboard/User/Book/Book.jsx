import React, { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProviders';

const Book = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className='flex flex-row flex-wrap justify-between items-center p-4'>
                <p className='font-Poppins font-semibold text-xl text-text-dark'>Book</p>
                <p className='font-Poppins font-semibold text-xl text-text-dark'>{user?.displayName}</p>
            </div>
            <div className='h-screen bg-[#F4F7FC] w-full p-5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate facere deserunt commodi repellendus numquam voluptas, labore alias eum, incidunt odit assumenda cumque maiores ex accusantium adipisci. Suscipit a optio inventore ipsa aperiam corporis eum modi alias, ratione distinctio labore ducimus fuga veritatis, velit possimus non repellat cupiditate! Sapiente, eligendi.</p>
            </div>
        </div>
    );
};

export default Book;