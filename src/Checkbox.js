import React from 'react'
import {connect} from 'react-redux'
import {action} from './redux'
//import { CheckboxAction } from './redux/CheckboxAction';

function Checkbox(props) {
    return (
        <div className="checkbox-options">
            {<input className="input-checkbox" type="checkbox" value={props.label} onChange={props.action} />}
            <label>{props.label}</label>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        selected: state.selected 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        action: () => dispatch(action())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkbox)