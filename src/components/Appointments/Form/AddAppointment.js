import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '../../SubComponents/TextField';
import Button from '../../SubComponents/Button';
import { getDateNow, getTimeNow } from '../../../global/functions/functions';

import { createAppointment } from '../../../actions/appointments';
import './AddAppointment.css';


const initialState = {activity: '', date: getDateNow(), time: getTimeNow()};

export const AddAppointment = (props) => {
    const dispatch = useDispatch();

    // input fields appointment
    const [appointment, setAppointment] = useState(initialState);

    // handle change on input field appointment
    const handleChange = (e) => setAppointment({ ...appointment, [e.target.name]: e.target.value });

    // add appointment
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createAppointment(appointment, props.email));
        setAppointment(initialState);
    }

    return (
        <div className="addappointment">
            <form onSubmit={handleSubmit}>
                <TextField type="text" name="activity" label="Activity" value={appointment.activity} onChange={handleChange}/>
                <TextField type="date" min={getDateNow()} name="date" label="" value={appointment.date} onChange={handleChange}/>
                <TextField type="time" name="time" label="" value={appointment.time} onChange={handleChange}/>
                <Button class="btn-add-appointment" value="Add Appointment" />
            </form>
        </div>
    )
}

