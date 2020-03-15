import React, { Component } from 'react';
import {fetch} from "whatwg-fetch";

import './main-style.scss';
import Nav from '../Navigation/navigation';
import Container from '../Container/container';

class Main extends Component {
    state = {
        activities: [],
        selectedCategories: [],
    };

    componentDidMount() {
        fetch('http://localhost:3004/activities')
            .then(response =>{
                if (response.ok){
                    return response.json()
                }
                throw new Error('Network error')
            }).then(activities => {
                this.setState({
                    activities: activities
                })
        }).catch(err => console.error(err))
    };

    onClickCategory = (category) => {
        console.log({ category})
        if (this.state.selectedCategories.includes(category)) {
            this.setState({
                selectedCategories: this.state.selectedCategories.filter((c) => c !== category),
            });
            return;
        }

        this.setState({
            selectedCategories: [
                ...this.state.selectedCategories,
                category,
            ],
        });
    }

    render(){
        const filteredActivities = this.state.selectedCategories.length
            ? this.state.activities.filter(
                ({ category }) => this.state.selectedCategories.includes(category),
            )
            : this.state.activities;

        return(
            <section className="main">
                <Nav
                    onClickCategory={this.onClickCategory}
                    selectedCategories={this.state.selectedCategories}
                />
                <Container activities={filteredActivities} />
            </section>
        )
    }
}


export default Main;