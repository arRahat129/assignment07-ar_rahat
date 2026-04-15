"use client"
import React, { useContext } from 'react';
import { MdOutlineTextsms } from 'react-icons/md';
import { TimelinesContext } from '../context/timeline.context';
import { toast } from 'react-toastify';

const TextButton = ({ friend }) => {
    const { timelines, setTimelines } = useContext(TimelinesContext);

    const handleTexts = () => {
        // console.log("Handle Calls");
        setTimelines([...timelines, friend]);
        toast.success(`You called ${friend.name}`);
    }

    return (
        <button className='card flex flex-col gap-3 bg-gray-50 shadow-xs py-5 justify-center items-center rounded-lg cursor-pointer hover:transform hover:scale-110 hover:bg-gray-200 hover:shadow-md'
            onClick={handleTexts}>
            <MdOutlineTextsms className='text-green-950 text-3xl' />
            <h2 className='text-green-950 font-bold'>Text</h2>
        </button>
    );
};

export default TextButton;