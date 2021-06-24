import React from 'react';
import './Button.css';

function Button(props) {
    return (
    <button 
        className={`costum-btn ${props.class}`}
        type={props.type}
        >{props.value}</button>
    )
}

export default Button
