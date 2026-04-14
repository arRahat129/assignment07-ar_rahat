import React from 'react';

const dataPromise = async() => {
    const res = await fetch("http://localhost:3000//friends.data.json");
    const data = await res.json();
    return data;
}

const Stats = async() => {
    const friends = await dataPromise();
    // console.log(friends);
    

    return (
        <div className='grid grid-cols-4 gap-6 container mx-auto '>
            <div className='card bg-white shadow-lg rounded-lg p-8 text-center space-y-2'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>{friends.length}</h1>
                <p className='text-[#64748B]'>Total Friends</p>
            </div>
            <div className='card bg-white shadow-lg rounded-lg p-8 text-center space-y-2'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>
                    3
                </h1>
                <p className='text-[#64748B]'>On Track</p>
            </div>
            <div className='card bg-white shadow-lg rounded-lg p-8 text-center space-y-2'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>6</h1>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <div className='card bg-white shadow-lg rounded-lg p-8 text-center space-y-2'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>12</h1>
                <p className='text-[#64748B]'>Interations This Month</p>
            </div>
        </div>
    );
};

export default Stats;