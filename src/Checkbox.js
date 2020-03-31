import React from 'react';

function Checkbox(props) {
    return (
        <div className="checkbox-options">
            {<input className="input-checkbox" type="checkbox" value={props.value} onChange={props.onChange} checked={props.checked} />}
            <label>{props.label}</label>
        </div>
    );
}

export default Checkbox;