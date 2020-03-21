import React from 'react';
import Radio from './Radio';
import Checkbox from './Checkbox';

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            /**
             * Final state:
             * Structure of userAnswers:
             * {
             *   "questionId": 1,
             *   "selected": [selectedValues]
             * }
             * 
             * eg.
             * {
             *    "questionId": 1,
             *    "selected": ["react", "angular"]
             * }
             */
            userAnswers: {},
            /**
             * First step: maintain user selected values in checkbox
             * array.splice(index, howmany, item1, ....., itemX)
             */
            selected: [],
            selectedRadio: null
        };

        this.handleCheckBoxToggle = this.handleCheckBoxToggle.bind(this);
        this.handleRadioToggle = this.handleRadioToggle.bind(this);
    }

    handleCheckBoxToggle = event => {  
        let x = 1;            
        let selected = [...this.state.selected];
        for(let i=0; i<4; i++){
            if(selected[i] === event.target.value){            
                selected.splice(i,1); 
                x=0;           
                break;            
            }
        }
        if(x === 1)
            selected.push(event.target.value);
        this.setState({ selected });
        console.log('selectedCheckBox:', selected);       
    }

    handleRadioToggle = event => {
        let selectedRadio = [...this.state.selected];
        selectedRadio = event.target.value;
        this.setState({selectedRadio});
        console.log('selectedRadio:', selectedRadio);
    }

    render() {
        /**
         * NOTE: We are using destructing assignment.
         * more-info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
         * it is equivalent to 
         * const options = props.options;
         * const type = props.type;
         * Notice we are not using "questionId" below but it is available in props.
        */
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
        else if(type === "radio") {
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
        }
        else
            return null;
    }
}

export default Options;