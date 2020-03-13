import React from 'react';
import './landing-page-style.scss';
import TopNavigation from './components/TopNavigation/Top_navigation';
import Banner from './components/Banner/Banner'
import HowWorks from './components/HowWorks/HowWorks';
import AboutApp from './components/AboutApp/AboutApp';
import Footer from './components/Footer/Footer';

const LandingPage = () => {
    return (
        <div className="landing-page">
        <TopNavigation/>
        <Banner/>
        <AboutApp/>
        <HowWorks/>
        <Footer/>
        </div>
    )
}
export default LandingPage;