"use client"

import React, { useContext } from 'react';
import { TimelinesContext } from '../context/timeline.context';

const Interactions = () => {
    const { timelines } = useContext(TimelinesContext);
    // console.log(timelines, "Timeline");

    return (
        <div className='card bg-white shadow-lg rounded-lg p-8 flex justify-center items-center space-y-2'>
                <h1 className='text-[#244D3F] text-2xl md:text-[32px] font-semibold'>
                    {timelines.length}
                </h1>
                <p className='text-[#64748B] text-center'>Interations This Month</p>
            </div>
    );
};

export default Interactions;