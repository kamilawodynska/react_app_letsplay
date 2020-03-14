import React, { Component } from 'react';
import ActivityMin from '../../Activity-min/Activity-min';

class MusicActivitiesList extends Component{

    isMusic = () => {
        const musicActivities = this.props.activities.filter((activity) => {
            return activity.category === "music"
        })
        return musicActivities
    }

    render(){
        console.log(this.isArt());
        return(
            <ul className="activities-list">
                {this.isMusic().map(activity => {
                    return <ActivityMin key={activity.id} activity={activity} />
                })}
            </ul>
        )
    }
}

export default MusicActivitiesList;