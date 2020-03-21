import React from 'react'

/**
 * NOTE:
 * This is incomplete component.
 * We are not handling checked attribute as of now.
 * We will need to handle checked attribute in future as there will be more questions and user may navigate to another page 
 */
function Checkbox(props) {
    return (
        <div className="checkbox-options">
            {<input className="input-checkbox" type="checkbox" value={props.label} onChange={props.handleCheckBoxToggle} />}
            <label>{props.label}</label>
        </div>
    );
}

export default Checkbox;