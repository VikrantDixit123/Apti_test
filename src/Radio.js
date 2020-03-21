import React from 'react'

function Radio(props) {
    return (
        <div className="radio-options">
            {<input className="input-radio" type="radio" name="radio" value={props.label} onChange={props.handleCheckBoxToggle} />}
            <label>{props.label}</label>
        </div>
    );
}

export default Radio;