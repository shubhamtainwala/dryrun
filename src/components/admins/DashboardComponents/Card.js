import React from 'react';
import './Card.css';

const Card = (props) => {
    //when we replace a conponent then it will also loose itd className thus below step will help to avoid that errpr.
    const classes = 'admin-event-card' + props.className ;
    //here bcz only ONE element therefore no need to wrap in a div
    return <div className={ classes }>{ props.children }</div>
}

export default Card;
