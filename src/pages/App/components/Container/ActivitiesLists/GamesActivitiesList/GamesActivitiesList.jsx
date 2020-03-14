import React, { Component } from 'react';
import ActivityMin from '../../Activity-min/Activity-min';

class GamesActivitiesList extends Component{

    isGames = () => {
        const gamesActivities = this.props.activities.filter((activity) => {
            return activity.category === "games"
        })
        return gamesActivities
    }

    render(){
        console.log(this.isArt());
        return(
            <ul className="activities-list">
                {this.isGames().map(activity => {
                    return <ActivityMin key={activity.id} activity={activity} />
                })}
            </ul>
        )
    }
}

export default GamesActivitiesList;