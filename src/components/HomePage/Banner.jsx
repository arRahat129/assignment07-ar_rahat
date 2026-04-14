import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className='text-center'>
            <h2 className='font-bold text-5xl text-[#1F2937] mb-4'>Friends to keep close in your Life</h2>
            <p className='text-[#64748B] mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            <button className='btn bg-[#244D3F] rounded-md px-4 py-3 text-white'>
                <FaPlus /> Add a Friend
            </button>
        </div>
    );
};

export default Banner;