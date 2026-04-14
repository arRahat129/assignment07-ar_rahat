import React from 'react';
import { RingLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <RingLoader />
        </div>
    );
};

export default loading;