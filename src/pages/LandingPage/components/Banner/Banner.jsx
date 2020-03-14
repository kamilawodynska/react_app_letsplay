import React from 'react';
import './banner-style.scss';


const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-text">
                <h1>Don't wait! Let's play today!</h1>
                <h2>Access to hundreds of ideas for active and creative spending time with Your children!</h2>
                <a href="/app" className="pulsate-fwd" >Let's START!</a>
            </div>
            <a href="#about-app" id="about-app"><i class="arrow-down"></i></a>
        </section>

    )
}

export default Banner;