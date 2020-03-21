import React from 'react'

function Question(props) {
    return (
        <div>
            <span>{props.questionNumber}.</span>
            <span> {props.questionText}</span>
        </div>
    );
}

export default Question;
