import React from 'react';
import { ScaleLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <ScaleLoader />
        </div>
    );
};

export default loading;