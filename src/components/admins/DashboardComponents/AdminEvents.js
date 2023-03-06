import React from 'react';
import EventPage from './EventPage';
import Card from './Card';
import './AdminEvents.css';

const AdminEvents = (props) =>{
    return(
        <Card className='adminevents'>
            {
                props.items.map(
                    event => (
                        <EventPage 
                            // key={ event.id }
                            date={ event.date } 
                            title={ event.title } 
                            hours={ event.hours }/>
                    )
                )
            }
        </Card>
    );
}

export default AdminEvents;