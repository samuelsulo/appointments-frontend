import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteAppointment, updateAppointment } from '../../../actions/appointments';

import './Appointment.css';

function Appointment( props ) {
    const initialState = { activity: props.appointment.activity, date: props.appointment.date, time: props.appointment.time }
    const dispatch = useDispatch();
    const [isModify, setIsModify] = useState(false);
    const [input, setInput] = useState(initialState)
    const id = props.appointment._id;

    const remove = () => {
        if (isModify) {
            setIsModify(false);
            setInput(initialState);
        }
        else
            dispatch(deleteAppointment(id));
    }

    const modify = () => {
        if (isModify)
            dispatch(updateAppointment(id, input));
        setIsModify(!isModify);
        setInput(initialState);
    }

    const handleChange = (e) => setInput({...input, [e.target.name]: e.target.value});

    return (
        <tr className={`appointment ${props.class}`}>
            <td className={`activity `} >{!isModify ? props.appointment.activity : <input type="text" className="modifyAppointment" name="activity" autoFocus value={input.activity} onChange={handleChange}/>}</td>
            <td className="date" >{!isModify ? props.appointment.date : <input type="date" className="modifyAppointment" name="date" value={input.date} onChange={handleChange}/>}</td>
            <td className="time" >{!isModify ? props.appointment.time : <input type="time" className="modifyAppointment" name="time" value={input.time} onChange={handleChange}/>}</td>
            <td>
                <span className="modify" onClick={modify}>{!isModify ? 'modify ' : 'update '}</span> 
                | <span className="delete" onClick={remove}>{!isModify ? 'delete' : 'cancel'}</span>
            </td>
        </tr>
    )
}

export default Appointment;
