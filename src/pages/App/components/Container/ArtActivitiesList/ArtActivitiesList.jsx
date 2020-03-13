import React, { Component } from 'react';
import ActivityMin from '../Activity-min/Activity-min';

class ArtActivitiesList extends Component{

    isArt = (activity) => {
        const artActivities = [];
        if (activity.category === "art"){
            artActivities.push(activity)
        }
        return artActivities;
    }
    render(){
        console.log(this.props.activities.filter(this.isArt))
        return(
            <ul className="activities-list">
                {this.props.activities.filter(this.isArt).map(activity => {
                    return <ActivityMin key={activity.id} activity={activity} />
                })}
            </ul>
        )
    }
}

export default ArtActivitiesList;