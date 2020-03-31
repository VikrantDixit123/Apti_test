import React from 'react'
import { connect } from 'react-redux'
import { checkboxAction } from './redux'

function Checkbox(props) {
    return (
        <div className="checkbox-options">
            {<input className="input-checkbox" type="checkbox" value={props.label} onChange={props.CheckboxAction} />}
            <label>{props.label}</label>
            <h1>{console.log(props.selected)}</h1>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        selected: state.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        CheckboxAction: () => dispatch(checkboxAction())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkbox)