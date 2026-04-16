import React, { useContext } from 'react';
import { TimelinesContext } from '../context/timeline.context';
import { FiPhoneCall, FiVideo } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';

const TimelineData = ({ timelines }) => {
    // const { timelines } = useContext(TimelinesContext);

    return (
        <div>
            {timelines.map((event, i) => {
                return (
                    <div
                        key={i}
                        className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between shadow-md p-4 md:p-4 rounded-md bg-white mb-4"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">

                            <div className="flex items-center justify-start sm:justify-center">
                                {event.type === "call" ? (
                                    <FiPhoneCall className="h-6 w-6 md:h-10 md:w-10" />
                                ) : event.type === "video" ? (
                                    <FiVideo className="h-6 w-6 md:h-10 md:w-10" />
                                ) : (
                                    <MdOutlineTextsms className="h-6 w-6 md:h-10 md:w-10" />
                                )}
                            </div>

                            <div className="space-y-1 md:space-y-2">
                                <h2 className="font-semibold text-base md:text-xl text-[#64748B]">
                                    <span className="text-black font-bold text-lg md:text-2xl">
                                        {event.type === "call"
                                            ? "Call"
                                            : event.type === "text"
                                                ? "Text"
                                                : "Video"}
                                    </span>{" "}
                                    with {event.friend.name}
                                </h2>

                                <p className="text-xs md:text-sm text-gray-500">
                                    {new Date(event.time).toLocaleTimeString()} •{" "}
                                    {new Date(event.time).toDateString()}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TimelineData;