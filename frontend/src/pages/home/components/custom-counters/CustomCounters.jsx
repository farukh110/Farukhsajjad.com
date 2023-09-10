import React from 'react';
import CountUp from 'react-countup';
import './CustomCounters.scss';

const CustomCounters = () => {
    return (
        <>
            <div className='custom-counters my-5'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-3'>

                            <div className='counter-circle text-center d-flex flex-column align-items-center justify-content-center'>

                                <CountUp
                                    className='counter navy-blue'
                                    end={5}
                                    suffix="+" />

                                <p>Years of experience <br />
                                    with quality work</p>

                            </div>

                        </div>

                        <div className='col-md-3'>

                            <div className='counter-circle text-center d-flex flex-column align-items-center justify-content-center'>

                                <CountUp
                                    className='counter navy-blue'
                                    end={40}
                                    suffix="+" />

                                <p>Successfully Live <br />
                                    Project</p>

                            </div>

                        </div>

                        <div className='col-md-3'>

                            <div className='counter-circle text-center d-flex flex-column align-items-center justify-content-center'>

                                <CountUp
                                    className='counter navy-blue'
                                    end={5}
                                    suffix="K+" />

                                <p>Number of business helped <br />
                                    to date</p>

                            </div>

                        </div>

                        <div className='col-md-3'>

                            <div className='counter-circle text-center d-flex flex-column align-items-center justify-content-center'>

                                <CountUp
                                    className='counter navy-blue'
                                    end={4.8}
                                    decimal="."
                                    decimals={1}
                                    duration={2.5}
                                />

                                <p>The rating i have received <br />
                                    from most of them</p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomCounters;