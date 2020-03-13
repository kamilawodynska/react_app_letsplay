import React from 'react';
import './navigation-style.scss';

import Categories from './components/Categories/Categories';
import Filters from './components/Filters/Filters';

const Nav = () => {
    return (
        <nav className="navigation">
            <Categories />
            <Filters/>
        </nav>
    )
}

export default Nav;