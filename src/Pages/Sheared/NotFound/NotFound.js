import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../assets/img/Summer-404-not-found.jpg'

const NotFound = () => {
    return (
        <div>
            <div> <img src={notFound} alt="" /></div>
            <div className='text-accent text-center pb-4'>
                <h3 className='text-3xl'>Page Not Found</h3>
                <p>The page you are looking for no longer exists. Perhaps you can return back to the site's homepage and see if you can find what you are looking for.</p>
                <Link to="/" className='btn btn-neutral hover:text-primary'> Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;