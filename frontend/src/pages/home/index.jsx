import React from 'react';
import './index.scss';
import CustomBanner from './components/banner/CustomBanner';
import Services from './components/services/Services';
import ConnectMe from './components/connect-with-me/ConnectMe';
import CustomCounters from './components/custom-counters/CustomCounters';

const Home = () => {
    return (
        <>

            <CustomBanner />
            <Services />
            <CustomCounters />
            <ConnectMe />
        </>
    )
}

export default Home;