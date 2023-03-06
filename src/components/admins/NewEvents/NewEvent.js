import React from 'react';
import './NewEvent.css'
import EventForm from './EventForm';

const NewEvent = (props) => {

    //"enteredEventData" will get the value of object from the child present in NewForm.js
    const saveEventDataHandler = (enteredEventData) => {
        const eventData = {
            ...enteredEventData, id: Math.random().toString()
        }   
        props.onAddEvent(eventData); // sending data to Dashboard.js
    }

    return(
        <div className='admin-new-events'>
            <EventForm onSaveEventData={ saveEventDataHandler }/>
        </div>
    );
}

export default NewEvent;