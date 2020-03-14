import React, { Component } from 'react';
import './navigation-style.scss';

import Categories from './components/Categories/Categories';
import Filters from './components/Filters/Filters';

class Nav extends Component{
    render(){
        return (
            <nav className="navigation">
                <Categories category={this.props.category}/>
                <Filters/>
            </nav>

        )
    }
}

export default Nav;