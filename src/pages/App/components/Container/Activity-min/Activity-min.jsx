import React, { Component } from 'react';
import './activity-min-style.scss';

class ActivityMin extends Component{
    render(){
        return(
            <>
            <li className="activity-min" onClick={this.props.selectActivity}>
                <h2>{this.props.activity.name}</h2>
                <h3>{this.props.activity.category}</h3>
            </li>
            </>
        )
    }
}

export default ActivityMin;