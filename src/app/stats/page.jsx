import React from 'react';

const dataPromise = async () => {
    const res = await fetch("http://localhost:3000//friends.data.json");
    const data = await res.json();
    return data;
}


const StatsPage = async() => {
    const friends = await dataPromise();
    console.log(friends);
    return (
        <div>
            <h2>This is the Stats Page</h2>
        </div>
    );
};

export default StatsPage;