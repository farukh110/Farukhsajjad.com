import React from 'react';
import './CustomBanner.scss';
import farukh_sajjad from '../../../../assets/images/profile/farukh_sajjad.png';

const CustomBanner = () => {
    return (
        <>
            <div className='custom-banner py-5'>

                <div className='container'>

                    <div className='row'>

                        <div className='col-md-6 align-self-center'>


                            <div className='custom-headings'>

                                <h6> Hello! </h6>
                                <br />
                                <h1>This is </h1>
                                <h1>Farrukh Sajjad </h1>

                            </div>

                            <div className='custom-small-content-area'>

                                <div className='row'>

                                    <div className='col-md-1'>
                                        <div className='line mt-md-3'></div>

                                    </div>

                                    <div className='col-md-11'>

                                        <div className='small-content'>
                                            <p>I am is designed and aimed at creative alone that want to <br /> showcase their projects and services in a new, creative way.</p>
                                        </div>

                                    </div>

                                </div>

                                <div className='row'>

                                    <div className='col-md-3'>

                                        <button className='btn btn-talk'>Lets Talk</button>

                                    </div>

                                    <div className='col-md-3'>

                                        <button className='btn btn-custom'>Portfolio</button>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className='col-md-6 align-self-center'>

                            <div className='profile-container'>

                                <div className='profile-content'>

                                    <img className='img-fluid' src={farukh_sajjad} alt='' />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default CustomBanner;