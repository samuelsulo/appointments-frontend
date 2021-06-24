import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components
import Appointment from './Appointment/Appointment';
import { AddAppointment } from './Form/AddAppointment';

import './Appointments.css';
import { getAppointments } from '../../actions/appointments';

function Appointments() {
    const dispatch = useDispatch();
    // table state
    
    const email = useSelector(state => state.authReducer.user.email);
    const appointments = useSelector(state => state.appointmentsReducer.appointments);
    useEffect(() => {
        dispatch(getAppointments(email));
    }, [email, dispatch]);

    return (
        <div className="appointments">
            <h2>Appointments</h2>
            <AddAppointment email={email}/>
            {appointments.length > 0 && <table>
                <thead>
                    <tr>
                        <th>Appointment</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr> 
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <Appointment key={index} class={index % 2 === 0 ? "even" : "odd"} 
                        appointment={appointment}/>
                    ))}
                </tbody>
            </table> }
        </div>
    )
}

export default Appointments;
