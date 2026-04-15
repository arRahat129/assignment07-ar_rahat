'use client'

import React, { useContext } from "react";
import TimelineData from "@/components/TimelineData/TimelineData";
import { TimelinesContext } from "@/components/context/timeline.context";

const TimeLinePage = () => {
    const { timelines, setTimelines } = useContext(TimelinesContext);

    return (
        <div className='container mx-auto space-y-5 min-h-[50vh]'>
            <h2 className='text-[#1F2937] text-5xl font-bold'>Timeline</h2>
            <input type='text' placeholder='Filter timeline' className='border-2 py-2 px-3 rounded-lg' />
            <div className="container mx-auto my-10">
                {timelines.length === 0 ? (
                    <h2 className="font-bold text-4xl text-center my-5">
                        No Contact found!
                    </h2>
                ) : (
                    <TimelineData />
                )}
            </div>
        </div>
    );
};

export default TimeLinePage;