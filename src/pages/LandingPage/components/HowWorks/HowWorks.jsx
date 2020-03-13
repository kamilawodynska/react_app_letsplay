import React from 'react';
import "./how-works-style.scss";

import Box from './Box/box';

const HowWorks = () => {
    return (
        <section className="how-works" id="how-works">
            <Box number="1" title="Saerch" text="Find activity adapted to owned art accessories and your skills."></Box>
            <Box number="2" title="Prepare" text="Prepare the fun place. Follow the instructions."></Box>
            <Box number="3" title="Enjoy" text="Enjoy active and creative time spent with your child/-ren!"></Box>
        </section>
    )
}

export default HowWorks;