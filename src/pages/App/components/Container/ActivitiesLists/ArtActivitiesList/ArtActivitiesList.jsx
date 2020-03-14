import React, { Component } from 'react';
import ActivityMin from '../../Activity-min/Activity-min';

class ArtActivitiesList extends Component{

    isArt = () => {
        const artActivities = this.props.activities.filter((activity) => {
            return activity.category === "art"
        })
        return artActivities
    }

    render(){
        console.log(this.isArt());
        return(
            <ul className="activities-list">
                {this.isArt().map(activity => {
                    return <ActivityMin key={activity.id} activity={activity} />
                })}
            </ul>
        )
    }
}

export default ArtActivitiesList;