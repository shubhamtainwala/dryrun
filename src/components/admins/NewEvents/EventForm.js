import React, {useState } from 'react';
import './EventForm.css';

const EventForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredHours, setEnteredHours] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const hoursChangeHandler = (event) => {
        setEnteredHours(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        //below step avoids refreshing of page on submittion which is the default behaviour of submit button
        event.preventDefault();

        //collecting data in the form of object
        const eventData = {
            title: enteredTitle,
            hours: enteredHours,
            date: new Date(enteredDate) //did this bcz we got input in the form of string thus converting it into non string format
        }

        props.onSaveEventData(eventData); //passing data to parent NewEvent.js by calling the function "saveEventDataHandler" in that parent and activating it where "enteredEventData" will collect it.

        //setting all the field to blank for accepting new submittion
        setEnteredTitle('');
        setEnteredHours('');
        setEnteredDate('');
    }

    return(
        <form onSubmit={ submitHandler }>
            <div className='admin-new-event__controls'>
                <div className='admin-new-event__control'>
                    <label>Title</label>
                    <input type='text' value={ enteredTitle } onChange={ titleChangeHandler } />
                </div>
                <div className='admin-new-event__control'>
                    <label>Hours</label>
                    <input type='number' min="0.01" step="0.01" value={ enteredHours } onChange={ hoursChangeHandler } />
                </div>
                <div className='admin-new-event__control'>
                    <label>Date</label>
                    <input type='date' value={ enteredDate } onChange={ dateChangeHandler } />
                </div>
            </div>
            <div className='admin-new-event__action'>
                <button type='submit'>Add Event</button>
            </div>
        </form>
    );
}

export default EventForm;