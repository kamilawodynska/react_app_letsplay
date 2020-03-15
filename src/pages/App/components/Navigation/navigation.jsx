import React, { Component } from 'react';
import './navigation-style.scss';

import Categories from './components/Categories/Categories';

class Nav extends Component{
    render(){
        return (
                    <nav className="navigation">
                        <Categories
                            onClickCategory={this.props.onClickCategory}
                            selectedCategories={this.props.selectedCategories}
                        />
                    </nav>


        )
    }
}

export default Nav;