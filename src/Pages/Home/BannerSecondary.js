import React from 'react';
import { Link } from 'react-router-dom';

const BannerSecondary = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.idolz.com/wp-content/uploads/2021/04/vehicle-spare-parts-1-1.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Which are the most important vehicle spare parts</h1>
                    <p className="py-6">
                        Keeping your car in good condition does more than just prevent some issues, it also helps keep your vehicle running smoothly and extend its lifespan. So, a regular vehicle maintenance is the key. You certainly don’t have to be an expert, but the information provided below will allow you to learn about car parts and become a more informed driver!</p>
                    <Link
                        to="/blogs"
                        className='btn btn-primary font-bold'
                    >Read More Blogs</Link>
                </div>
            </div>
        </div>
    );
};

export default BannerSecondary;