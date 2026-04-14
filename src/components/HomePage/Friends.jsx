import Image from 'next/image';
import React from 'react';

const dataPromise = async () => {
    const res = await fetch("http://localhost:3000//friends.data.json");
    const data = await res.json();
    return data;
}

const Friends = async () => {
    const friends = await dataPromise();
    // { id, name, picture, email, days_since_contact, goal, next_due_date, status, tags }

    return (
        <div>
            <h2>Your Friends</h2>
            <div className='grid grid-cols-4 text-center gap-6'>
                {
                    friends.map((friend) => <div key={friend.id} className='space-y-2 card bg-white shadow-xl p-6'>
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
                        <p className='text-[#64748B] text-xs'>{friend.days_since_contact}d ago</p>
                        <div className='flex gap-1 justify-center'>
                            {
                                friend.tags.map((tag, i) => (
                                    <h2 key={i} className='bg-[#CBFADB] text-[#244D3F] font-medium text-xs py-1 px-2 rounded-full'>{tag}</h2>
                                ))
                            }
                        </div>
                        <h2 className='bg-[#EFAD44] text-white py-1 px-2 font-medium text-xs btn w-fit h-fit mx-auto rounded-full'>{friend.status}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Friends;