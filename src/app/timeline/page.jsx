"use client"

import { TimelinesContext } from '@/components/context/timeline.context';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FiFileText, FiPhoneCall, FiVideo } from 'react-icons/fi';

const TimeLinePage = () => {
    const { timelines, setTimelines } = useContext(TimelinesContext);
    // console.log(timelines);


    return (
        <div className='container mx-auto space-y-5'>
            <h2 className='text-[#1F2937] text-5xl font-bold'>Timeline</h2>
            <input type='text' placeholder='Filter timeline' className='border-2 py-2 px-3 rounded-lg' />
            <div className="container mx-auto my-10">
                {timelines.length === 0 ? (
                    <h2 className="font-bold text-4xl text-center my-5">
                        No Contact found!
                    </h2>
                ) : (
                    timelines.map((event, i) => {
                        // console.log(event.time);
                        return (
                            <div
                                key={i}
                                className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
                            >
                                <div className='flex gap-5'>
                                    <div className='flex items-center justify-center'>
                                        {
                                            event.type === "call"
                                                ? <FiPhoneCall className='h-10 w-10' />
                                                : event.type === "text"
                                                    ? <FiVideo />
                                                    : <FiFileText />
                                        }
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-xl text-[#64748B]">
                                            <span className='text-black font-bold text-2xl'>
                                                {
                                                    event.type === "call"
                                                        ? "Call"
                                                        : event.type === "text"
                                                            ? "Text"
                                                            : "Video"
                                                }
                                            </span> with {event.friend.name}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {new Date(event.time).toLocaleTimeString()} • {new Date(event.time).toDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default TimeLinePage;