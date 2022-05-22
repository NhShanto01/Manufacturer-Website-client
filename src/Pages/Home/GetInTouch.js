import React from 'react';
import parts from '../../assets/img/dark-parts.jpg';


const GetInTouch = () => {
    return (
        <div style={{ backgroundImage: `url(${parts})` }}
            className='mb-2 shadow-xl'>
            <div className='text-center pb-14 text-white '>
                <h1 className='text-4xl text-accent font-bold pt-4'>Get In Touch</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Brand Name'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button className='btn btn-accent mb-8'>Submit</button>
            </div>
        </div>
    );
};

export default GetInTouch;