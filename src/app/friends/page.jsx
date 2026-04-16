import FriendCard from '@/components/FriendCard/FriendCard';
import React from 'react';

const dataPromise = async () => {
    const res = await fetch("https://assignment07-arrahat-kohl.vercel.app/friends.data.json");
    const data = await res.json();
    return data;
}

const Friends = async () => {
    const friends = await dataPromise();
    // { id, name, picture, email, days_since_contact, goal, next_due_date, status, tags }

    return (
        <div className='container mx-auto min-h-[50vh]'>
            <h2 className='text-xl font-bold text-center md:text-start mb-5 md:mb-2'>Your Friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center gap-4 lg:gap-6'>
                {
                    friends.map((friend) => <FriendCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default Friends;