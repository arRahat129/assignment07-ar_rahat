import CallButton from '@/components/FriendsDetails/CallButton';
import TextButton from '@/components/FriendsDetails/TextButton';
import VideoButton from '@/components/FriendsDetails/VideoButton';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { FaArchive } from 'react-icons/fa';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';

const dataPromise = async () => {
    const res = await fetch("https://assignment07-arrahat-kohl.vercel.app/friends.data.json");
    const data = await res.json();
    return data;
}

export async function generateMetadata({ params }) {
    const { friendId } = await params;
    const friends = await dataPromise();
    console.log(friendId);
    
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
    // console.log(params);
    const friends = await dataPromise();

    const { friendId } = await params;

    const friend = friends.find((friend) => friend.id === Number(friendId));
    // console.log(friend, "Friend");

    if (!friend) {
        notFound();
    }

    return (
        <main className='bg-base-100'>
            <section className="container mx-auto px-4 py-12 bg-amber-50 grid grid-cols-5 grid-rows-12 gap-3">
                <div className='space-y-2 card bg-white shadow-xl p-6 col-span-2 row-span-6 text-center rounded-lg'>
                    <div className='flex justify-center mb-1'>
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={50}
                            height={50}
                            className='rounded-full'
                        />
                    </div>
                    <h2 className='text-xl font-semibold'>{friend.name}</h2>
                    <h2 className='bg-[#EFAD44] text-white py-1 px-2 font-medium text-xs btn w-fit h-fit mx-auto rounded-full'>{friend.status}</h2>

                    <div className='flex gap-1 justify-center'>
                        {
                            friend.tags.map((tag, i) => (
                                <h2 key={i} className='bg-[#CBFADB] text-[#244D3F] font-medium text-xs py-1 px-2 rounded-full'>{tag}</h2>
                            ))
                        }
                    </div>

                    <p className="text-md text-[#64748B]">{friend.bio}</p>
                    <p className="text-xs text-[#64748B]">{friend.email}</p>
                </div>

                <div className='space-y-2 card bg-white shadow-xl p-6 col-span-1 row-[span_3_/span_6] text-center text-[#244D3F] rounded-lg'>
                    <p className='font-bold text-2xl'>{friend.days_since_contact}</p>
                    <p className='text-[#64748B] text-xs'>Days Since Contract</p>
                </div>

                <div className='space-y-2 card bg-white shadow-xl p-6 col-span-1 row-[span_3_/span_6] text-center text-[#244D3F] rounded-lg'>
                    <p className='font-bold text-2xl'>{friend.goal}</p>
                    <p className='text-[#64748B] text-xs'>Goal (Days)</p>
                </div>

                <div className='space-y-2 card bg-white shadow-xl py-6 px-3 col-span-1 row-[span_3_/span_6] text-center text-[#244D3F] rounded-lg'>
                    <p className='font-bold text-2xl'>{friend.next_due_date}</p>
                    <p className='text-[#64748B] text-xs'>Next</p>
                </div>

                <div className='space-y-2 card bg-white shadow-xl p-5 col-span-3 row-[span_3_/span_6] grid grid-cols-6 items-center rounded-lg'>
                    <div className='col-span-5 space-y-5'>
                        <p className='text-[#244D3F]'>Relationship Goal</p>
                        <p>Contact every <span className='text-green-950'>30 days</span></p>
                    </div>

                    <button className='btn col-span-1 rounded-md'>Edit</button>
                </div>

                <div className='bg-white shadow-xl col-span-2 row-[span_2_/span_6] text-center flex justify-center items-center gap-2 rounded-lg hover:transform hover:scale-105 hover:bg-gray-100 cursor-pointer'>
                    <RiNotificationSnoozeLine />
                    <p className='font-medium'>Snooze 2 Weeks</p>
                </div>

                <div className='bg-white shadow-xl p-6 col-span-3 row-[span_6_/span_12] rounded-lg'>
                    <h2 className='text-[#244D3F] mb-5'>Quick Check-in</h2>

                    <div className='grid grid-cols-3 gap-5 my-auto h-[70%]'>
                        <CallButton friend={friend} />

                        <TextButton friend={friend} />

                        <VideoButton friend={friend} />
                    </div>
                </div>

                <div className='bg-white shadow-xl col-span-2 row-[span_2_/span_6] text-center flex justify-center items-center gap-2 rounded-lg hover:transform hover:scale-105 hover:bg-gray-100 cursor-pointer'>
                    <FaArchive />
                    <p className='font-medium'>Archive</p>
                </div>

                <div className='bg-white shadow-xl col-span-2 row-[span_2_/span_6] text-center flex justify-center items-center gap-2 rounded-lg hover:transform hover:scale-105 hover:bg-red-100 cursor-pointer hover:text-xl'>
                    <RiDeleteBinLine className='text-red-500' />
                    <p className='font-medium text-red-600'>Delete</p>
                </div>
            </section>
        </main>
    );
};

export default FriendsDetails;