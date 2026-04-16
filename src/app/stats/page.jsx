import PieChartRecharts from '@/components/Stats/PieChartRecharts';
import React from 'react';

export const metadata = {
    title: "Stats | KeenKeeper",
    description: "Interaction Stats",
};

const StatsPage = () => {

    return (
        <div className="container mx-auto my-5 md:my-10">
            <h2 className="font-bold text-3xl md:text-5xl my-0 md:my-10 text-[#1F2937] text-center md:text-start">
                Friendship Analytics
            </h2>
            <div className="my-5 md:my-10 bg-white border border-gray-200 shadow p-5 md:p-10 rounded-xl">
                <h2 className="font-semibold text-lg mb-10 text-[#244D3F]">
                    By Interaction Type
                </h2>

                <PieChartRecharts />
            </div>
        </div>
    );
};

export default StatsPage;