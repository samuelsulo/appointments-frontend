import React from 'react';

import './TextField.css';

function TextField(props) {

    return (
        <>
        <label className="costum-text-field">
            <input className={`text-field ${props.name === "password" ? "password" : null}`}
                required
                type={props.type}
                name={props.name}
                value={props.value}
                min={props.min} // for dates only
                autoFocus={props.focus}
                onChange={props.onChange}
            />
            <span className="placeholder">{props.label}</span>
        </label>
      </>
    )
}

export default TextField;
