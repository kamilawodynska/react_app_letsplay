import React, { Component } from 'react';
import {fetch} from "whatwg-fetch";

import './main-style.scss';
import Nav from '../Navigation/navigation';
import Container from '../Container/container';

class Main extends Component {
    state = {
        activities: []
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
    render(){
        return(
            <section className="main">
                <Nav/>
                <Container activities={this.state.activities}/>
            </section>
        )
    }
}


export default Main;