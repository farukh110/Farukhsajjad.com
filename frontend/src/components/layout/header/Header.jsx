import React from 'react';
import fs_logo from '../../../assets/images/logo/fs_Logo.svg'
import './index.scss';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src={fs_logo} className='img-fluid' alt='Farukh Sajjad' />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Client</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success" type="submit">Contact Me</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;