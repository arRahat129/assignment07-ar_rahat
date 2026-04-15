"use client"

import { TimelinesContext } from '@/components/context/timeline.context';
import Image from 'next/image';
import React, { useContext } from 'react';

const TimeLinePage = () => {
    const { timelines, setTimelines } = useContext(TimelinesContext);
    console.log(timelines);
    

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
                    timelines.map((friend, i) => {
                        return (
                            <div
                                key={i}
                                className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
                            >
                                <div>
                                    <Image
                                        src={friend.picture}
                                        width={120}
                                        height={120}
                                        className="h-[120px] w-auto"
                                        alt=""
                                    />
                                    <h2 className="font-semibold text-2xl">{friend.name}</h2>
                                </div>
                                {/* <button
                                className="btn bg-secondary text-white"
                                onClick={() => handleUninstall(app)}
                            >
                                Uninstall
                            </button> */}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default TimeLinePage;