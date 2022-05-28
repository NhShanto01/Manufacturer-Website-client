import React from 'react';
import { BsFlag } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineUnsubscribe } from 'react-icons/md';

const BusinessSummary = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20 px-8'>
            <div className='py-8 mx-auto text-center shadow-xl px-16 border-solid border-2 border-primary hover:bg-primary'>
                <h2 className='ml-4  text-5xl mb-5'><BsFlag /></h2>
                <h2 className='text-3xl mb-2'>35</h2>
                <h3 className='text-xl'>Countries</h3>
            </div>
            <div className='py-8 mx-auto text-center shadow-xl px-16 border-solid border-2 border-primary hover:bg-primary'>
                <h2 className='ml-4  text-5xl mb-5'><MdOutlineUnsubscribe /></h2>
                <h2 className=' text-2xl mb-2'>52k+</h2>
                <h3 className='text-xl'>Subscriber</h3>
            </div>
            <div className='py-8 mx-auto text-center shadow-xl px-16 border-solid border-2 border-primary hover:bg-primary'>
                <h2 className='ml-8  text-5xl mb-5 '><IoIosPeople /></h2>
                <h2 className='text-3xl mb-2'>65k+</h2>
                <h3 className='text-xl'>Happy Client</h3>
            </div>
            <div className='py-8 mx-auto text-center shadow-xl px-16 border-solid border-2 border-primary hover:bg-primary'>
                <h1 className='ml-2 text-5xl mb-5'><BiLike /></h1>
                <h2 className='text-3xl mb-2'>658k+</h2>
                <h3 className='text-xl'>Feedback</h3>
            </div>
        </div>
    );
};

export default BusinessSummary;