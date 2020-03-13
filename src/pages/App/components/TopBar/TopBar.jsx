import React from 'react';
import logo from '../../../LandingPage/components/TopNavigation/logo2.png';
import './top-bar-style.scss';

const TopBar = () => {
        return(
            <header className="top-navigation">
                <div className="logo">
                    <a href="/app"><img src={logo} alt="logo-lets-play" className="logo-img"></img></a>
                </div>
                <ul className="nav">
                    <li>Start</li>
                    <li>My account</li>
                    <li>Log in/ Log out</li>
                </ul>
            </header>
        )
}

export default TopBar;
