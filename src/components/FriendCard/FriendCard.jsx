import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
    return (
        <Link href={`/friends/${friend.id}`}>
            <div key={friend.id} className='space-y-2 card bg-white shadow-xl p-6'>
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
            </div>
        </Link>
    );
};

export default FriendCard;