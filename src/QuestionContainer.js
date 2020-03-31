import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Question from './Question';
import Options from './Options';
import * as SetUserAnswerAction from './actions/SetUserAnswerAction';

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswers: {}
    }

    this.handleCheckboxToggle = this.handleCheckboxToggle.bind(this);
    this.handleRadioToggle = this.handleRadioToggle.bind(this);
  }

  render() {
    /**
     * NOTE: We are using destructing assignment.
     * more-info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
     * it is equivalent to 
     * const question = props.question;
     * const questionNumber = props.questionNumber;
    */
    const { question, questionNumber } = this.props;
    const selectedAnswer = this.props.userAnswers[question.id];

    return (
      <React.Fragment>
        <Question questionText={question.questionText} questionNumber={questionNumber} />
        <Options options={question.options} type={question.type} _this={this} selectedAnswer={selectedAnswer} />
      </React.Fragment>
    );
  }

  /******************** Helper Methods ********************/
  handleCheckboxToggle = event => {
    const { question } = this.props;
    let userAnswers = { ...this.props.userAnswers };
    let selected = [];

    if (userAnswers[question.id]) {
      selected = [...userAnswers[question.id]];
    }

    if (selected.includes(event.target.value)) {
      selected = selected.filter(d => d !== event.target.value);
    } else {
      selected.push(event.target.value);
      console.log(selected);
    }

    this.props.setUserAnswer(question.id, selected);
  }

  handleRadioToggle = event => {
    const { question } = this.props;
    let selected = [event.target.value];
    this.props.setUserAnswer(question.id, selected);
    console.log(selected);
  }

}

/******************** Redux Bindings ********************/
const mapStateToProps = state => ({
  userAnswers: state.userAnswers
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setUserAnswer: SetUserAnswerAction.setUserAnswer,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
