"use client"

import { createContext, useState } from "react"

export const TimelinesContext = createContext();

const TimelinesProvider = ({ children }) => {
    const [ timelines, setTimelines ] = useState([]);

    const data = {
        timelines,
        setTimelines,
    };

    return (
        <TimelinesContext.Provider value={data}>
            {children}
        </TimelinesContext.Provider>
    );
};

export default TimelinesProvider;