"use client"

import React, { useContext, useState } from 'react';
import TimelineData from './TimelineData';
import { TimelinesContext } from '../context/timeline.context';

const TimelineClient = () => {
    const { timelines } = useContext(TimelinesContext);

    const [filterType, setFilterType] = useState("all");
    const [sortOrder, setSortOrder] = useState("newest");

    let filtered = timelines.filter(item => {
        return filterType === "all" || item.type === filterType;
    });

    let processedTimelines = filtered.sort((a, b) => {
        if (sortOrder === "newest") {
            return new Date(b.time) - new Date(a.time);
        } else {
            return new Date(a.time) - new Date(b.time);
        }
    });

    return (
        <div className='container mx-auto space-y-5 min-h-[50vh]'>
            <h2 className='text-[#1F2937] text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-bold py-5 md:py-0'>
                Timeline
            </h2>

            <div className='flex flex-col md:flex-row justify-center md:justify-between gap-5 items-center'>

                <div className='flex flex-col gap-2 max-w-md w-full'>
                    <label className='text-gray-500 text-lg text-center md:text-start'>
                        Filter Timeline
                    </label>
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

                <div className="space-y-2">
                    <h2 className='text-gray-500 text-lg text-center md:text-end'>
                        Sort
                    </h2>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn">
                            Sort By Date
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                            <li>
                                <a onClick={() => setSortOrder("newest")}>
                                    Newest First
                                </a>
                            </li>
                            <li>
                                <a onClick={() => setSortOrder("oldest")}>
                                    Oldest First
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="container mx-auto my-10">
                {processedTimelines.length === 0 ? (
                    <div className="container mx-auto my-10 p-10 text-center bg-white shadow-lg min-h-[50vh]">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#214d3e]">
                            No Activity Yet!!
                        </h2>
                        <p className="text-gray-400 mt-2 md:text-lg">
                            Interact with People, Then You will see the History of Interactions here.
                        </p>
                    </div>
                ) : (
                    <TimelineData timelines={processedTimelines} />
                )}
            </div>
        </div>
    );
};

export default TimelineClient;