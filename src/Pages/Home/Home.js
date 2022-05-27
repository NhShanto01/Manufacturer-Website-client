import React from 'react';
import useTools from '../../hooks/useTools';
import Footer from '../Sheared/Footer/Footer';
import BannerOne from './BannerPrimary';
import BannerTwo from './BannerSecondary';
import BusinessSummary from './BusinessSummary';
import GetInTouch from './GetInTouch';
import ReviewsCollection from './ReviewsCollection';
import ShowPartsItem from './ShowPartsItem';

const Home = () => {
    const [tools, setTools] = useTools();

    const showToolItem = tools.slice(0, 6);

    return (
        <div>
            <BannerOne></BannerOne>
            <BusinessSummary></BusinessSummary>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    showToolItem.map(tools => <ShowPartsItem
                        key={tools._id}
                        tools={tools}
                    ></ShowPartsItem>)
                }
            </div>
            <ReviewsCollection></ReviewsCollection>
            <GetInTouch></GetInTouch>
            <BannerTwo></BannerTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;