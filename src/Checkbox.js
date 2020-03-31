import React from 'react';

function Checkbox(props) {
    return (
        <div className="checkbox-options">
            {<input className="input-checkbox" type="checkbox" value={props.value} onChange={props.onChange} checked={props.checked} />}
            <label>{props.label}</label>
<<<<<<< HEAD
            <h1>{console.log(props.selected)}</h1>
=======
>>>>>>> aa009d3332778e4bf7b1f70ebbc85984adb52f6d
        </div>
    );
}

export default Checkbox;