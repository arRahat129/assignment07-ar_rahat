"use client"

import React, { useContext, useState } from 'react';
import TimelineData from './TimelineData';
import { TimelinesContext } from '../context/timeline.context';

const TimelineClient = () => {
    const { timelines } = useContext(TimelinesContext);
    const [filterType, setFilterType] = useState("all");

    const processedTimelines = timelines.filter(item => {
        return filterType === "all" || item.type === filterType;
    });

    return (
        <div className='container mx-auto space-y-5 min-h-[50vh]'>
            <h2 className='text-[#1F2937] text-2xl md:text-4xl lg:text-5xl font-bold'>Timeline</h2>

            <div className='flex flex-col mx-auto md:mx-0 gap-3 max-w-md'>
                <label htmlFor="" className='text-gray-500 text-lg text-center md:text-start'>Filter Timeline</label>
                <select
                    className="border border-gray-300 px-4 py-2 rounded-lg"
                    onChange={event => setFilterType(event.target.value)}
                >
                    <option value="all">All</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>
            </div>

            <div className="container mx-auto my-10">
                {processedTimelines.length === 0 ? (
                    <h2 className="font-bold text-2xl md:text-4xl text-center my-5">
                        No Contact found!
                    </h2>
                ) : (
                    <TimelineData timelines={processedTimelines} />
                )}
            </div>
        </div>
    );
};

export default TimelineClient;