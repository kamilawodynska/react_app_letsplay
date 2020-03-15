import React, { Component } from 'react';

const categories = [
    {
        value: 'art',
        label: 'Art'
    },
    {
        value: 'gardening',
        label: 'Gardening'
    },
    {
        value: 'funinthekitchen',
        label: 'In the kitchen'
    },
    {
        value: 'games',
        label: 'Games'
    },
    {
        value: 'music',
        label: 'Music'
    },
    {
        value: 'outdoorfun',
        label: 'Outdoor fun'
    },
];

class Categories extends Component{
    state = {
        isOpen: false
    };

    removeClass = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    renderCheckbox = ({
        value,
        label,
    }) => {
        return (
            <div>
                <label for="strings-yarn" htmlFor={value}>
                    <input
                        checked={this.props.selectedCategories.includes(value)}
                        type="checkbox"
                        id={value}
                        name={value}
                        onChange={() => {
                            this.props.onClickCategory(value);
                        }}
                    />
                    {label}
                </label>
            </div>
        );   
    }
    
    render(){
        return (
            <section className="categories-menu">
            <a className="categories-title" onClick={this.removeClass} href="#">Categories</a>
            <nav className={!this.state.isOpen ? 'hide' : ' '}>
                <ul className="categories">
                    {categories.map((category) => {
                        return this.renderCheckbox(category);
                    })}
                </ul>
            </nav>
                
            </section>
        )
    }
}


export default Categories;