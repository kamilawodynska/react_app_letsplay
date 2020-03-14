import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './container.scss';

import InitialActivitiesList from './InitialActivitiesList/InitialActivitiesList';
import ArtActivitiesList from './ActivitiesLists/ArtActivitiesList/ArtActivitiesList';

import ActivityMax from './Activity-max/Activity-max'



class Container extends Component{
    state= {
        selectedActivity: null
    };

    selectActivity = (activity) => {
        console.log(this.props.activities);
        this.setState({
            selectedActivity: activity,
        });
    };
    clearSelectedActivity = () => {
        this.setState({
            selectedActivity: null,
        });
    };


    render(){
        if(this.state.selectedActivity){
            return <ActivityMax                 
            activity={this.state.selectedActivity}
            backToList={this.clearSelectedActivity} />
        }
        return(
            <section className="container">
                <InitialActivitiesList activities={this.props.activities} selectActivity={this.selectActivity}/>
                {/* <ArtActivitiesList activities={this.props.activities} /> */}

            </section>

        )
    }
}

export default Container;