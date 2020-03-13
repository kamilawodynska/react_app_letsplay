import React, { Component } from 'react';

class Filters extends Component{
    state = {
        isOpen: false
    };

    removeClass = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    markHave = (e) => {
        

    };
    render(){
        return (
            <section className="filters-menu">
                <a className="filters-title" onClick={this.removeClass} href="#">Filters</a>
                <nav className={!this.state.isOpen ? 'hide' : ' '}>
                    <div className="filters">
                        <p>What have at home?</p>
                        <p className="filter">
                            <input type="checkbox" onChange={this.markHave}/> {' '}
                            Paint
                        </p>
                        <p className="filter">
                            <input type="checkbox" onChange={this.markHave}/> {' '}
                            Strings, yarn
                        </p>
                        <p className="filter">
                            <input type="checkbox" onChange={this.markHave}/> {' '}
                            Colored papers
                        </p>
                        <p className="filter">
                            <input type="checkbox" onChange={this.markHave}/> {' '}
                            Food dyes
                        </p>
                    </div>
                </nav>
            </section>
        )
    }
}


export default Filters;