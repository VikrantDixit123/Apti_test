import React from 'react';
/***** Components *****/
import QuestionContainer from './QuestionContainer';
/***** JSON data *****/
/**
 * NOTE: We have JSON data available questions.js file. 
 * so that we can directly import the variable and use it.
 * similar thing we will use when we introduce redux, to setup initial state values.
 * We have "questionsData" as named export in questions.js and not default import.
*/
import { questionsData } from './json/questions';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      // NOTE: When we need to use styling try to use className as best practice.
      // main-class is defined in style.css
      <div className="main-class">
        <h1>Below are the sample questions:</h1>
        {
          // NOTE: Here we are using questionsData, which is JSON data which we imported.
          // We are looping over it and creating QuestionContainer for each question and passing question object as props
          // more info: https://www.javatpoint.com/react-map
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
          questionsData.map((question, index) => {
            /**            
            * passing index+1 as questionNumber because index starts from 0
            * We are not using id as questionNumber because that id is identifier of that question in database.
            * and when we select random questions the ids may not be serial numbers.
           */
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