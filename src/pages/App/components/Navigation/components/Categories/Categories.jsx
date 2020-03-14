import React, { Component } from 'react';

class Categories extends Component{
    state = {
        isOpen: false
    };

    removeClass = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    
    render(){
        return (
            <section className="categories-menu">
            <a className="categories-title" onClick={this.removeClass} href="#">Categories</a>
            <nav className={!this.state.isOpen ? 'hide' : ' '}>
                <ul className="categories">
                    <li className="category">Art</li>
                    <li className="category">Gardening</li>
                    <li className="category">In the kitchen</li>
                    <li className="category">Games</li>
                    <li className="category">Music</li>
                    <li className="category">Outdoor fun</li>
                </ul>
            </nav>
                
            </section>
        )
    }
}


export default Categories;