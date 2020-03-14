import React, { Component } from 'react';
import ActivityMin from '../../Activity-min/Activity-min';

class FunintheKitchenActivitiesList extends Component{

    isFunintheKitchen = () => {
        const funintheKitchenActivities = this.props.activities.filter((activity) => {
            return activity.category === "funinthekitchen"
        })
        return funintheKitchenActivities
    }

    render(){
        console.log(this.isArt());
        return(
            <ul className="activities-list">
                {this.isFunintheKitchen().map(activity => {
                    return <ActivityMin key={activity.id} activity={activity} />
                })}
            </ul>
        )
    }
}

export default FunintheKitchenActivitiesList;