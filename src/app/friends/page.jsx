import FriendCard from '@/components/FriendCard/FriendCard';
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
        <div className='container mx-auto'>
            <h2 className='text-xl font-bold'>Your Friends</h2>
            <div className='grid grid-cols-4 text-center gap-6'>
                {
                    friends.map((friend) => <FriendCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default Friends;