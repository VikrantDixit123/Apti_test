import React from 'react'

function Radio(props) {
    return (
        <div className="radio-options">
            {<input className="input-radio" type="radio" value={props.value} name="radio" onChange={props.onChange} checked={props.checked} />}
            <label>{props.label}</label>
        </div>
    );
}

export default Radio;