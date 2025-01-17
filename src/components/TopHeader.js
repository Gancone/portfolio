import React from 'react';
import gabri from '../media/pics/gabri.jpeg';

const TopHeader = () => {
    return (
        <div className='flex w-screen h-screen justify-center'>
            <div className='flex justify-center items-center w-screen'>
                animazione
            </div>
            <div className='flex flex-col justify-between items-center w-screen bg-red-800'>
                <div className='h-full flex items-center'>
                    <ul className='flex gap-16'>
                        <li><a>Home</a></li>
                        <li><a>Chi sono</a></li>
                        <li><a>Progetti</a></li>
                    </ul>
                </div>
                <div className=''>
                    <img src={gabri} alt="Gabri" className='w-full max-h-full' />
                </div>
            </div>

        </div>
    );
};
export default TopHeader;
