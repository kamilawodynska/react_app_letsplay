import React from 'react';
import './about-app-style.scss';

const AboutApp = () => {
    return (
        <section className="about-app" >
            <div className="about-app-text">
                <h1 className="title">About App</h1>
                <p className="text">Spending time together is very important for building proper and strong relationships with the child. Thanks to joint classes, conversation and being together we get to know each other, learn to be with each other, and most importantly, learn to enjoy shared moments.</p>
                <p className="text" >When we spend time together with a child, we create common experiences and memories that we can come back to during conversations, which are extraordinary souvenirs of our time together.</p>
                <p className="strong">We want to help You!</p>
                <p className="text">In everyday life prose, ideas for creative spending time with children are often lacking. That is why we have prepared ready ideas for you, along with a list of necessary things, as well as detailed instructions and tips to make the most of this time!</p>
                <h2 className="idea" >Don't waste time looking for ideas!<br/>Everything you need is here!</h2>
            </div>

            <a href="#how-works" id="how-works"><i class="arrow-down" ></i></a>
        </section>


    )
}

export default AboutApp;