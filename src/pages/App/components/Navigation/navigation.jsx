import React, { Component } from 'react';
import './navigation-style.scss';

import Categories from './components/Categories/Categories';
import Filters from './components/Filters/Filters';

class Nav extends Component{
    render(){
        return (
            <nav className="navigation">
                <Categories
                    onClickCategory={this.props.onClickCategory}
                    selectedCategories={this.props.selectedCategories}
                />
                <Filters />
            </nav>

        )
    }
}

export default Nav;