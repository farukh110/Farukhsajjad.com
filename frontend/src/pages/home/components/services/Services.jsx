import React from 'react';
import './Services.scss';
import ServiceItem from './ServiceItem';
import qualityIcon from '../../../../assets/images/icons/services/quality.svg';
import designing from '../../../../assets/images/icons/services/designing.svg';
import development from '../../../../assets/images/icons/services/development.svg';
import ui_ux_designing from '../../../../assets/images/icons/services/ui-ux-designing.svg';
import right_arrow_blue from '../../../../assets/images/icons/general/right-arrow-blue.svg';

const Services = () => {
    return (
        <>
            <div className='container services p-5'>

                <div className='row justify-content-between'>

                    <div className='col-md-4'>

                        <div className='content-area'>

                            <h2>Here is my<br />
                                services</h2>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>

                            <span>Lets Talk <img src={right_arrow_blue} alt='Lets Talk' /> </span>

                        </div>


                    </div>

                    <div className='col-md-4'>

                        <ServiceItem
                            iconImage={qualityIcon}
                            heading='Quality Control'
                            smallContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            buttonText='learn more'
                        />

                    </div>

                </div>

                <div className='row mt-md-5'>

                    <div className='col-md-4'>

                        <ServiceItem
                            iconImage={designing}
                            heading='Designing'
                            smallContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            buttonText='learn more'
                        />

                    </div>

                    <div className='col-md-4 custom-dev-margin-top-invert'>

                        <ServiceItem
                            iconImage={development}
                            heading='Development'
                            smallContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            buttonText='learn more'
                        />

                    </div>

                    <div className='col-md-4'>

                        <ServiceItem
                            iconImage={ui_ux_designing}
                            heading='UI/UX Designing'
                            smallContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            buttonText='learn more'
                        />

                    </div>

                </div>

            </div>
        </>
    )
}

export default Services;