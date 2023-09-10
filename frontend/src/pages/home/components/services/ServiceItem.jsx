import React from 'react';
import './ServiceItem.scss';

const ServiceItem = (props) => {

    const { iconImage, heading, smallContent, buttonText } = props;

    return (
        <>
            <div className='service-item text-center shadow p-4 pb-md-5'>

                <div className='service_icon mt-md-2'>

                    <img src={iconImage} alt="" />

                </div>

                <div className='service-content mt-md-4'>

                    <h4>{heading} </h4>
                    <p className='my-md-4'>{smallContent}</p>

                    <button className='text-white text-capitalize mb-3'> {buttonText} </button>

                </div>

            </div>

        </>
    )
}

export default ServiceItem;