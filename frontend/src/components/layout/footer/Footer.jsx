import React from 'react';
import './index.scss';

const Footer = () => {
    return (
        <>
            <div className='container border-top border-dark pt-md-3 pb-md-3 mt-md-5'>

                <div className='row'>
                    <div className='col-md-4'>
                        <p>© All Right Reserved</p>
                    </div>
                    <div className='col-md-4'>
                        <p className='text-center'>Farukh Sajjad</p>
                    </div>
                    <div className='col-md-4'>

                        <ul className='float-end list-inline'>
                            <li className='list-inline-item'><a href='!#' className='fab fa-behance text-decoration-none text-dark'></a></li>
                            <li className='list-inline-item'><a href='!#' className='fab fa-linkedin text-decoration-none text-dark'></a></li>
                            <li className='list-inline-item'><a href='!#' className='fab fa-facebook text-decoration-none text-dark'></a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer;