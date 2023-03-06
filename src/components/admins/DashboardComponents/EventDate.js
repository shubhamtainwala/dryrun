import React from 'react';
import './EventDate.css';

const EventDate = (props) => {
    const month =props.date.toLocalString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocalString('en-US', {day:'2-digit'}); 

    return(
        <div className='admin-event-date'>
            <div className='admin-event-date__month'>{ month }</div>
            <div className='admin-event-date__year'>{ year }</div>
            <div className='admin-event-date__day'>{ day }</div>
        </div>
    );
}

export default EventDate;