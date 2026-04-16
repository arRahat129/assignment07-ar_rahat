import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import { FaArchive } from 'react-icons/fa';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';

import CallButton from '@/components/FriendsDetails/CallButton';
import TextButton from '@/components/FriendsDetails/TextButton';
import VideoButton from '@/components/FriendsDetails/VideoButton';

const dataPromise = async () => {
    const res = await fetch("https://assignment07-arrahat-kohl.vercel.app/friends.data.json");
    const data = await res.json();
    return data;
}

export async function generateMetadata({ params }) {
    const { friendId } = await params;
    const friends = await dataPromise();

    const friend = friends.find((friend) => String(friend.id) === friendId);

    if (!friend) {
        return {
            title: `Person Not Found!`,
        };
    }

    return {
        title: `${friend.name} - Friend`,
    };
}

const FriendsDetails = async ({ params }) => {
    const friends = await dataPromise();
    const { friendId } = await params;

    const friend = friends.find((friend) => friend.id === Number(friendId));

    if (!friend) {
        notFound();
    }

    return (
        <main className='bg-base-100'>
            <section className="container mx-auto px-3 sm:px-5 md:px-8 py-8 md:py-12 bg-amber-50 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:grid-rows-6 lg:grid-rows-12 gap-3 md:gap-4">

                <div className='space-y-2 card bg-white shadow-xl p-4 sm:p-6 col-span-1 lg:col-span-2 md:row-span-3 lg:row-span-6 text-center rounded-lg'>
                    <div className='flex justify-center mb-1'>
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={50}
                            height={50}
                            className='rounded-full'
                        />
                    </div>

                    <h2 className='text-lg sm:text-xl font-semibold'>{friend.name}</h2>

                    <h2 className='bg-[#EFAD44] text-white py-1 px-2 font-medium text-[10px] sm:text-xs btn w-fit h-fit mx-auto rounded-full'>
                        {friend.status}
                    </h2>

                    <div className='flex flex-wrap gap-1 justify-center'>
                        {friend.tags.map((tag, i) => (
                            <h2
                                key={i}
                                className='bg-[#CBFADB] text-[#244D3F] font-medium text-[10px] sm:text-xs py-1 px-2 rounded-full'
                            >
                                {tag}
                            </h2>
                        ))}
                    </div>

                    <p className="text-sm sm:text-md text-[#64748B]">{friend.bio}</p>
                    <p className="text-[10px] sm:text-xs text-[#64748B]">{friend.email}</p>
                </div>

                <div className='space-y-2 card bg-white shadow-xl flex justify-center items-center col-span-1 md:col-start-2 md:row-span-1 lg:col-start-auto lg:row-[span_3_/span_6] text-center text-[#244D3F] rounded-lg'>
                    <p className='font-bold text-xl sm:text-2xl'>{friend.days_since_contact}</p>
                    <p className='text-[#64748B] text-[10px] sm:text-xs'>Days Since Contract</p>
                </div>

                <div className='space-y-2 card bg-white shadow-xl flex justify-center items-center col-span-1 md:col-start-2 md:row-span-1 lg:col-start-auto lg:row-[span_3_/span_6] text-center text-[#244D3F] rounded-lg'>
                    <p className='font-bold text-xl sm:text-2xl'>{friend.goal}</p>
                    <p className='text-[#64748B] text-[10px] sm:text-xs'>Goal (Days)</p>
                </div>

                <div className='space-y-2 card bg-white shadow-xl flex justify-center items-center col-span-1 md:col-start-2 md:row-span-1 lg:col-start-auto lg:row-[span_3_/span_6] text-center text-[#244D3F] rounded-lg'>
                    <p className='font-bold text-xl sm:text-2xl'>{friend.next_due_date}</p>
                    <p className='text-[#64748B] text-[10px] sm:text-xs'>Next</p>
                </div>

                <div className='space-y-2 card bg-white shadow-xl p-4 sm:p-5 col-span-1 md:col-span-2 lg:col-span-3 md:row-[span_1_/span_3] lg:row-[span_3_/span_6] grid grid-cols-1 sm:grid-cols-6 gap-3 sm:gap-0 items-center rounded-lg'>
                    <div className='col-span-1 sm:col-span-5 space-y-3 sm:space-y-5 text-center sm:text-left'>
                        <p className='text-[#244D3F] text-sm sm:text-base'>Relationship Goal</p>
                        <p className='text-sm sm:text-base'>
                            Contact every <span className='text-green-950'>30 days</span>
                        </p>
                    </div>

                    <button className='btn col-span-1 rounded-md w-full sm:w-auto'>
                        Edit
                    </button>
                </div>

                <div className='bg-white shadow-xl col-span-1 md:col-span-1 lg:col-start-auto lg:col-span-2 row-start-7 md:row-start-5 lg:row-start-auto lg:row-[span_1_/span_2] text-center flex justify-center items-center gap-2 rounded-lg hover:transform hover:scale-105 hover:bg-gray-100 cursor-pointer p-3'>
                    <RiNotificationSnoozeLine />
                    <p className='font-medium text-sm sm:text-base'>Snooze 2 Weeks</p>
                </div>

                <div className='bg-white shadow-xl p-4 sm:p-6 col-span-1 md:col-span-3 row-[span_6_/span_12] rounded-lg'>
                    <h2 className='text-[#244D3F] mb-3 sm:mb-5 text-sm sm:text-base'>
                        Quick Check-in
                    </h2>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 my-auto h-auto sm:h-[70%]'>
                        <CallButton friend={friend} />
                        <TextButton friend={friend} />
                        <VideoButton friend={friend} />
                    </div>
                </div>

                <div className='bg-white shadow-xl col-span-1 md:col-span-1 lg:col-span-2 row-start-8 md:row-start-5 lg:row-start-auto lg:row-[span_1_/span_2] text-center flex justify-center items-center gap-2 rounded-lg hover:transform hover:scale-105 hover:bg-gray-100 cursor-pointer p-3'>
                    <FaArchive />
                    <p className='font-medium text-sm sm:text-base'>Archive</p>
                </div>

                <div className='bg-white shadow-xl col-span-1 md:col-span-1 lg:col-span-2 row-start-9 md:row-start-5 lg:row-start-auto lg:row-[span_1_/span_2] text-center flex justify-center items-center gap-2 rounded-lg hover:transform hover:scale-105 hover:bg-red-100 cursor-pointer p-3'>
                    <RiDeleteBinLine className='text-red-500' />
                    <p className='font-medium text-red-600 text-sm sm:text-base'>
                        Delete
                    </p>
                </div>

            </section>
        </main>
    );
};

export default FriendsDetails;