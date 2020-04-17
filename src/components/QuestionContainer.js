import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Question from './Question';
import Options from './Options';
import Timer from './Timer'
import * as SetUserAnswerAction from '../actions/SetUserAnswerAction';
import * as SetTimeAction from '../actions/SetTimeAction';
import { Redirect } from 'react-router-dom'

/***** JSON data *****/
/**
 * NOTE: We have JSON data available questions.js file. 
 * so that we can directly import the variable and use it.
 * similar thing we will use when we introduce redux, to setup initial state values.
 * We have "questionsData" as named export in questions.js and not default import.
*/
import { questionsData } from '../data/questions';

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutstate: false
    }

    this.handleCheckboxToggle = this.handleCheckboxToggle.bind(this);
    this.handleRadioToggle = this.handleRadioToggle.bind(this);
  }

  render() {

    if (this.state.logoutstate === true) {
      return (
        <Redirect to="/logout" />
      )
    }

    return (
      <React.Fragment>        
          <h2 className="Time">
            <Timer time={this.props.time} />
          </h2>
          <br /><br />
          <div className="logout-btn">
            <button className="logout-btn" onClick={this.handleLogout}>Logout</button>
          </div>
          {
            questionsData.map((question, index) => {
              return (
                <div key={index} >
                  <Question questionText={question.questionText} questionNumber={index + 1} />
                  <Options options={question.options} type={question.type} questionId={question.id}
                    selectedAnswer={this.props.userAnswers[question.id]} _this={this} />
                </div>
              )
            })
          }        
      </React.Fragment>
    );

  }

  /******************** Helper Methods ********************/

  handleLogout = () => {
    const r = window.confirm("Do you want to Submit the test ?")
    if (r === true) {
      this.setState({
        logoutstate: true
      })
    }
  }

  handleCheckboxToggle = (event, questionId) => {
    let userAnswers = { ...this.props.userAnswers };
    let selected = [];

    if (userAnswers[questionId]) {
      selected = [...userAnswers[questionId]];
    }

    if (selected.includes(event.target.value)) {
      selected = selected.filter(d => d !== event.target.value);
    } else {
      selected.push(event.target.value);
    }

    this.props.setUserAnswer(questionId, selected);
  }

  handleRadioToggle = (event, questionId) => {
    let selected = [event.target.value];
    this.props.setUserAnswer(questionId, selected);
  }

}

/******************** Redux Bindings ********************/
const mapStateToProps = state => ({
  userAnswers: state.userAnswers,
  time: state.time
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setUserAnswer: SetUserAnswerAction.setUserAnswer,
  setTime: SetTimeAction.setTime
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
