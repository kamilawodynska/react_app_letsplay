import React, { Component } from 'react';
import ActivityMin from '../../Activity-min/Activity-min';

class OutdoorFunActivitiesList extends Component{

    isOutdoorFun = () => {
        const outdoorFunActivities = this.props.activities.filter((activity) => {
            return activity.category === "outdoorfun"
        })
        return outdoorFunActivities
    }

    render(){
        console.log(this.isArt());
        return(
            <ul className="activities-list">
                {this.isOutdoorFun().map(activity => {
                    return <ActivityMin key={activity.id} activity={activity} />
                })}
            </ul>
        )
    }
}

export default OutdoorFunActivitiesList;