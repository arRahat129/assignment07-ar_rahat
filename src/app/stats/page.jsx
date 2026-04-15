import PieChartRecharts from '@/components/Stats/PieChartRecharts';
import React from 'react';

const StatsPage = () => {

    return (
        <div className="container mx-auto my-10">
            <h2 className="font-bold text-5xl my-10 text-[#1F2937]">
                Friendship Analytics
            </h2>
            <div className="my-10 bg-white border border-gray-200 shadow p-10 rounded-xl">
                <h2 className="font-semibold text-lg mb-10 text-[#244D3F]">
                    By Interaction Type
                </h2>

                <PieChartRecharts />
            </div>
        </div>
    );
};

export default StatsPage;