import React, { Component } from 'react';
import ActivityMin from '../Activity-min/Activity-min';


class InitialActivitiesList extends Component{
    render(){
        console.log(this.props.activities[1])
        return(
            <ul className="activities-list">
                {this.props.activities.map(activity => {
                    return (
                        <ActivityMin key={activity.id} activity={activity} selectActivity={this.props.selectActivity}/>
                    )
                })}
            </ul>
        )
    }
}

export default InitialActivitiesList;