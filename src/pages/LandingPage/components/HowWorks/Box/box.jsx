import React from 'react';
import './box-style.scss';

const Box = (props) => {
    return (
        <div className="box">
            <h1 className="number">-{props.number}-</h1>
            <h3 className="title">{props.title}</h3>
            <p className="text">{props.text}</p>
        </div>
    )
}

export default Box;