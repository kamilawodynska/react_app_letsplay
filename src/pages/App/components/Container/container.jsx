import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './container.scss';

import InitialActivitiesList from './InitialActivitiesList/InitialActivitiesList';
import ArtActivitiesList from './ActivitiesLists/ArtActivitiesList/ArtActivitiesList';

import ActivityMax from './Activity-max/Activity-max'



class Container extends Component{
    state= {
        selectedActivityId: null
    };

    selectActivity = (activityId) => {
        this.setState({
            selectedActivityId: activityId,
        });
    };
    clearSelectedActivity = () => {
        this.setState({
            selectedActivityId: null,
        });
    };


    render(){
        if(this.state.selectedActivityId){
            const activity = this.props.activities.find(
                ({ id }) => id === this.state.selectedActivityId,
            );

            return (
                <ActivityMax                 
                    activity={activity}
                    backToList={this.clearSelectedActivity}
                />
            );
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