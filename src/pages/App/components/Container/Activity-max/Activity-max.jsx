import React, { Component } from 'react';
import './activity-max-style.scss';

class ActivityMax extends Component{
    render(){
        const { activity} = this.props;
        return(
            <>
            <li className="activity-max">
                <h1>{activity.name}</h1>
                <h3>{activity.category}</h3>
                <ul>Needed:
                </ul>
                <div>{activity.description}</div>
                <button onClick={this.props.backToList}>Back to list</button>
            </li>
            </>
        )
    }
}

export default ActivityMax;