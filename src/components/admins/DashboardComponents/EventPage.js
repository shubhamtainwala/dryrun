import React from 'react';
import EventDate from './EventDate';
import Card from './Card';
import './EventPage.css';

const EventPage = (props) =>{

    return(
        <Card className='admin-event-item'>
            <EventDate date={ new Date(props.date) } />
            <div className='admin-event-item__description'>
                <h2>{ props.title }</h2>
                <button className='admin-event-item__delete'>{ props.hours }</button>
            </div>
        </Card>
    );
}

export default EventPage;