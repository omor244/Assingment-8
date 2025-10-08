import React from 'react';
import { PacmanLoader, RingLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <h1 className='text-6xl '><PacmanLoader></PacmanLoader></h1>
        </div>
    );
};

export default Loading;