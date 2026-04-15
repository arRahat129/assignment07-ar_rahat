import React, { useContext } from 'react';
import { TimelinesContext } from '../context/timeline.context';
import { FiPhoneCall, FiVideo } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';

const TimelineData = () => {
    const { timelines, setTimelines } = useContext(TimelinesContext);

    return (
        <div>
            {
                timelines.map((event, i) => {
                    console.log(typeof event.type);
                    return (
                        <div
                            key={i}
                            className="flex gap-6 items-center justify-between shadow-md p-4 rounded-md bg-white mb-4"
                        >
                            <div className='flex gap-5'>
                                <div className='flex items-center justify-center'>
                                    {
                                        event.type === "call"
                                            ? <FiPhoneCall className='h-10 w-10' />
                                            : event.type === "video"
                                                ? <FiVideo className='h-10 w-10' />
                                                : <MdOutlineTextsms className='h-10 w-10' />
                                    }
                                </div>
                                <div className='space-y-2'>
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

            }
        </div>
    );
};

export default TimelineData;