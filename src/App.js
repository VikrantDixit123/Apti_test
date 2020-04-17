import React from 'react';
import QuestionContainer from './QuestionContainer';
/***** JSON data *****/
/**
 * NOTE: We have JSON data available questions.js file. 
 * so that we can directly import the variable and use it.
 * similar thing we will use when we introduce redux, to setup initial state values.
 * We have "questionsData" as named export in questions.js and not default import.
*/
import { questionsData } from './data/questions';

class App extends React.Component {
  render() {
    return (
      // NOTE: When we need to use styling try to use className as best practice.
      // main-class is defined in style.css
      <div className="main-class">
        <h1>Below are the sample questions:</h1>
        <br />
        {
          questionsData.map((question, index) => {
            return (
              <div key={index}>
                <QuestionContainer question={question} questionNumber={index + 1} />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;