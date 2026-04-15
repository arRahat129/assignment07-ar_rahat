"use client"
import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { TimelinesContext } from '../context/timeline.context';
import { toast } from 'react-toastify';

const CallButton = ({ friend }) => {
    const { timelines, setTimelines } = useContext(TimelinesContext);
    // console.log("timelines", timelines);

    const handleCalls = () => {
        // console.log("Handle Calls");

        const event = {
            type: "call",
            friend: friend,
            time: new Date().toISOString(),
        }
        
        setTimelines([...timelines, event]);
        toast.success(`You called ${friend.name}`);
    }
    
    return (
        <button className='card flex flex-col gap-3 bg-gray-50 shadow-xs py-5 justify-center items-center rounded-lg cursor-pointer hover:transform hover:scale-110 hover:bg-gray-200 hover:shadow-md'
        onClick={handleCalls}>
            <FiPhoneCall className='text-green-950 text-3xl' />
            <h2 className='text-green-950 font-bold'>Call</h2>
        </button>
    );
};

export default CallButton;