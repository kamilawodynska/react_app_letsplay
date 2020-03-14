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
                            <input type="checkbox" id="paint" name="paint" onChange={this.markHave}/>
                            <label for="paint">Paint</label>
                            
                        </p>
                        <p className="filter">
                            <input type="checkbox" id="strings-yarn" name="strings-yarn" onChange={this.markHave}/>
                            <label for="strings-yarn">Strings, yarn</label>
                        </p>
                        <p className="filter">
                            <input type="checkbox" id="colored-paper" name="colored-paper" onChange={this.markHave}/>
                            <label for="colored-paper">Colored papers</label>
                        </p>
                        <p className="filter">
                            <input type="checkbox" id="food-dyes" name="food-dyes" onChange={this.markHave}/>
                            <label for="food-dyes">Food dyes</label>
                        </p>
                    </div>
                </nav>
            </section>
        )
    }
}


export default Filters;