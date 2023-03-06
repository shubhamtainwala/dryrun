import React, { useState, useEffect } from 'react';
import AdminEvents from './DashboardComponents/AdminEvents';
import NewEvent from './NewEvents/NewEvent';
import './DashBoard.css';

let DUMMY_EVENTS = [
    {
        id: 1,
        title: 'Village Camp',
        hours: 20,
        date: new Date(2022, 12, 5)
    },
    {
        id: 2,
        title: 'BDD Drive',
        hours: 8,
        date: new Date(2022, 11, 15)
    },
    {
        id: 3,
        title: 'Beach Clean Up',
        hours: 4,
        date: new Date(2022, 10, 25)
    },
    {
        id: 1,
        title: 'plantation',
        hours: 2,
        date: new Date(2022, 10, 15)
    }
] 

const DashBoard = () => {
    const [adminsEvents, setAdminEvent] = useState(DUMMY_EVENTS);

    function fetchData() {
        fetch('')
        .then(expense => expense.json())
        .then(data => setAdminEvent(data));
    }

    // fetching data using an API
    useEffect(() => {
        fetchData();
    }, []);
    

    const addEventHandler = (event) => {
        //To post data entered by the user into the data base.
        fetch('', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'content-Type' : 'application/json'
            }
        }).then(
            response => {
                fetchData();
            }
        )
    };

    return(
        <div>
            <h1>Dashboard</h1>
            <NewEvent onAddEvent={ addEventHandler } />
            <AdminEvents items={ adminsEvents } />
        </div>
    );
}

export default DashBoard;