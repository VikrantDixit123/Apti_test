import React from 'react'

function Radio(props) {
    return (
        <div className="radio-options">
            {<input className="input-radio" type="radio" value={props.label} name="radio" onChange={props.handleCheckBoxToggle} />}
            <label>{props.label}</label>
        </div>
    );
}

export default Radio;