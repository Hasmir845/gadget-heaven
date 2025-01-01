import React from 'react';
import Banner from '../Banner/Banner';
import BannerImage from '../BannerImage/BannerImage';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerImage></BannerImage>
            <Products></Products>
        </div>
    );
};

export default Home;