import React from 'react'
import Question from './Question';
import Options from './Options';

function QuestionContainer(props) {
  /**
   * NOTE: We are using destructing assignment.
   * more-info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
   * it is equivalent to 
   * const question = props.question;
   * const questionNumber = props.questionNumber;
  */
  const { question, questionNumber } = props;

  return (
    <React.Fragment>
      <Question questionText={question.questionText} questionNumber={questionNumber} />
      <Options options={question.options} type={question.type} questionId={question.id} />
    </React.Fragment>
  );
}

export default QuestionContainer;
