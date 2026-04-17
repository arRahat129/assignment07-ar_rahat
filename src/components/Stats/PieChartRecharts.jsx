"use client"

import { Legend, Pie, PieChart, Tooltip } from "recharts";
import React, { useContext } from 'react';
import { TimelinesContext } from "../context/timeline.context";

const PieChartRecharts = () => {
    const { timelines } = useContext(TimelinesContext);
    // console.log(timelines, "Timelines");

    if (timelines.length === 0) {
        return (
            <div className="container mx-auto my-10 p-10 text-center bg-white shadow-lg min-h-[50vh]">
                <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
                    No activity yet!!
                </h2>
                <p className="text-gray-400 mt-2 md:text-lg">
                    Start calling, texting, or video to see stats here.
                </p>
            </div>
        )
    }

    const callCount = timelines.filter(event => event.type === "call").length;
    const videoCount = timelines.filter(event => event.type === "video").length;
    const textCount = timelines.filter(event => event.type === "text").length;

    const data = [
        { name: "Call", value: callCount, fill: "#0088FE" },
        { name: "Video", value: videoCount, fill: "#00C49F" },
        { name: "Text", value: textCount, fill: "#FF8042" },
    ];

    return (
        <PieChart
            style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "80vh",
                margin: "auto",
                aspectRatio: 1,
            }}
        >
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
            />
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default PieChartRecharts;