import React, { Component } from 'react';
import './activity-max-style.scss'

class ActivityMax extends Component{
    render(){
        const { activity} = this.props;
        return(
            <>
            <li className="activity-max">
                <h1 className="title">{activity.name}</h1>
                <div className="activity">
                    <div className="left">
                        <div className="ingredients">
                            <ul className="list">
                                <h3>Needed:</h3>
                                {activity.needed.map((need) => {
                                    return <li key={need.id}>{need}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <h2>Let's start!</h2>
                        <div className="description">{activity.description}</div>
                        <button className="backToList-btn" onClick={this.props.backToList}>Back to list</button>
                    </div>
                </div>
                
                
                
            </li>
            </>
        )
    }
}

export default ActivityMax;