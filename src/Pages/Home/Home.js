import React from 'react';
import Footer from '../Sheared/Footer/Footer';
import BannerOne from './BannerPrimary';
import BannerTwo from './BannerTwo';

const Home = () => {
    return (
        <div>
            <BannerOne></BannerOne>
            {/* <BannerTwo></BannerTwo> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;