import React from 'react';
/***** Components *****/
import Radio from './Radio';
import Checkbox from './Checkbox';

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userAnswers: {
                "questionId": this.props.questionId,
                "selected": []
            },
        };

        this.handleCheckBoxToggle = this.handleCheckBoxToggle.bind(this);
        this.handleRadioToggle = this.handleRadioToggle.bind(this);
    }


    handleCheckBoxToggle = event => {
        let x = 1;
        let selected = [...this.state.userAnswers.selected];
        console.log('Selected:', selected);
        for (let i = 0; i < 4; i++) {
            if (selected[i] === event.target.value) {
                selected.splice(i, 1);
                x = 2;
                break;
            }
        }
        if (x === 1)
            selected.push(event.target.value);
        this.setState({ selected });                    //this is not working
        console.log('QuestionId:', this.state.userAnswers.questionId);
        console.log('Selected:', selected);
    }

    handleRadioToggle = event => {
        let selected = [...this.state.userAnswers.selected];
        selected = event.target.value;
        this.setState({ selected });
        console.log('QuestionId:', this.state.userAnswers.questionId);
        console.log("Selected: ", selected);
    }


    render() {
        const { options, type } = this.props;

        if (type === "checkbox") {
            return (
                <div>
                    {
                        options.map((option, index) => {
                            return (
                                <Checkbox key={index} label={option.key} value={option.value} handleCheckBoxToggle={this.handleCheckBoxToggle} />
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
                                <Radio key={index} label={option.key} value={option.value} handleCheckBoxToggle={this.handleRadioToggle} />
                            );
                        })
                    }
                </div>
            );

            return null;
        }
    }
}
export default Options;