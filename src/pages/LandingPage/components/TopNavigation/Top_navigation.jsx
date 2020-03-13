import React from 'react';
import './top-navigation-style.scss';
import logo from './logo2.png';

const TopNavigation = () => {
    return (
        <header className="top-navigation-page">
            <div className="logo">
                <a href="/"><img src={logo} alt="logo-lets-play" className="logo-img"></img></a>
            </div>
            <ul className="menu">
                <li><a href="#about-app">About app</a></li>
                <li><a href="#how-works">How it works</a></li>
                <li ><a href="/app" className="start">Let's START!</a></li>
            </ul>
        </header>
    )
}

export default TopNavigation;