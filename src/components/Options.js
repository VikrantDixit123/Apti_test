import React from 'react';
/***** Components *****/
import Radio from './Radio';
import Checkbox from './Checkbox';

function Options(props) {
    const { options, type, questionId, _this, selectedAnswer } = props;
    if (type === "checkbox") {
        return (
            <div>
                {
                    options.map((option, index) => {
                        return (
                            <Checkbox key={index} label={option.key} value={option.value}
                                onChange={(event) => _this.handleCheckboxToggle(event, questionId)}
                                checked={typeof selectedAnswer !== 'undefined' && selectedAnswer.includes(option.value)}
                            />
                        );
                    })
                }
            </div>

        );
    }
    if (type === "radio") {
        return (
            <div>
                {
                    options.map((option, index) => {
                        return (
                            <Radio key={index} label={option.key} value={option.value}
                                onChange={(event) => _this.handleRadioToggle(event, questionId)}
                                checked={typeof selectedAnswer !== 'undefined' && selectedAnswer.includes(option.value)}
                            />
                        );
                    })
                }
            </div>
        );
    }
    return null;
}

export default Options;