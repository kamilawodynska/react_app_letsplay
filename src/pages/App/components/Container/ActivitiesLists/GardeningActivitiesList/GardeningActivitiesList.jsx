import React, { Component } from 'react';
import ActivityMin from '../../Activity-min/Activity-min';

class GardeningActivitiesList extends Component{

    isGardening = () => {
        const gardeningActivities = this.props.activities.filter((activity) => {
            return activity.category === "gardening"
        })
        return gardeningActivities
    }

    render(){
        console.log(this.isArt());
        return(
            <ul className="activities-list">
                {this.isGardening().map(activity => {
                    return <ActivityMin key={activity.id} activity={activity} />
                })}
            </ul>
        )
    }
}

export default GardeningActivitiesList;