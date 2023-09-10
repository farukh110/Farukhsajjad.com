import React from 'react';
import connect from '../../../../assets/images/icons/general/connect.svg';
import right_arrow from '../../../../assets/images/icons/general/right-arrow.svg';

import './ConnectMe.scss';

const ConnectMe = () => {
    return (
        <>
            <div className='container connect-me-container p-5'>

                <div className='row justify-content-center'>

                    <div className='col-md-10'>

                        <div className='connect-content text-center'>

                            <h1>Do you have Project? Let’s talk</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                            <div className="row justify-content-center connect-row">
                                <div className="col-md-2">
                                    <button className="btn btn-talk">Drop Email
                                        <img src={connect} alt="Drop Email" />
                                    </button></div>
                                <div className="col-md-2">
                                    <button className="btn btn-custom">Book a Call
                                        <img src={right_arrow} alt="Book a Call" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default ConnectMe;