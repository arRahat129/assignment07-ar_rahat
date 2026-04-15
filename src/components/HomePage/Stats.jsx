import React from 'react';
import Interactions from '../Stats/Interactions';

const dataPromise = async () => {
    const res = await fetch("https://assignment07-arrahat-kohl.vercel.app/friends.data.json");
    const data = await res.json();
    return data;
}

const Stats = async () => {
    const friends = await dataPromise();
    // console.log(friends);

    const onTrackCount = friends.filter(friend => friend.status === "on-track").length;
    // console.log(onTrackCount)

    const needAttention = friends.length - onTrackCount;


    return (
        <div className='grid grid-cols-4 gap-6 container mx-auto '>
            <div className='card bg-white shadow-lg rounded-lg p-8 text-center space-y-2'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>{friends.length}</h1>
                <p className='text-[#64748B]'>Total Friends</p>
            </div>
            <div className='card bg-white shadow-lg rounded-lg p-8 text-center space-y-2'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>
                    {onTrackCount}
                </h1>
                <p className='text-[#64748B]'>On Track</p>
            </div>
            <div className='card bg-white shadow-lg rounded-lg p-8 text-center space-y-2'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>
                    {needAttention}
                </h1>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <Interactions />
        </div>
    );
};

export default Stats;