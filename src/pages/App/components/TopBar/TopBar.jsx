import React from 'react';
import logo from '../../../LandingPage/components/TopNavigation/logo2.png';
import './top-bar-style.scss';

const TopBar = () => {
        return(
            <header className="top-navigation">
                <div className="logo">
                    <a href="/app"><img src={logo} alt="logo-lets-play" className="logo-img"></img></a>
                </div>
            </header>
        )
}

export default TopBar;
