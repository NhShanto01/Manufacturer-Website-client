import React from 'react';
import slide1 from '../../assets/img/car-custom-wheel-removebg-preview.png';
import slide2 from '../../assets/img/car-disc-braket-removebg-preview.png';
import slide3 from '../../assets/img/car-headlight-removebg-preview.png';

const BannerPrimary = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full bg-primary">
                <div className='md:flex items-center mx-auto'>
                    <div className='ml-24 order-2'>
                        <img src={slide1} className="w-2/4 ml-10" alt='slide-1' />
                    </div>
                    <div className='ml-28 order-1 text-justify'>
                        <h3 className="text-2xl md:text-3xl font-bold">Modern Auto</h3>
                        <h3 className="text-2xl md:text-3xl font-bold"> Parts Dealership</h3>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-primary">
                <div className='md:flex items-center mx-auto '>
                    <div className='ml-24 order-2'>
                        <img src={slide2} className="w-2/4 ml-10" alt='slide-1' />
                    </div>
                    <div className='ml-28 order-1 text-justify'>
                        <h3 className="text-2xl md:text-3xl font-bold">Modern Auto </h3>
                        <h3 className="text-2xl md:text-3xl font-bold"> Parts Dealership</h3>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full bg-primary">
                <div className='md:flex items-center mx-auto'>
                    <div className='ml-24 order-2'>
                        <img src={slide3} className="w-2/4 ml-10 " alt='slide-1' />
                    </div>
                    <div className='ml-28 order-1 text-justify'>
                        <h3 className="text-2xl md:text-3xl font-bold">Modern Auto</h3>
                        <h3 className="text-2xl md:text-3xl font-bold"> Parts Dealership</h3>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerPrimary;