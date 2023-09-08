import React from 'react';
import './index.scss';
import CustomBanner from './components/banner/CustomBanner';

const Home = () => {
    return (
        <>

            <CustomBanner />

            <div className='container mt-md-5'>

                <button className='btn btn-primary'> click </button>

            </div>

        </>
    )
}

export default Home;