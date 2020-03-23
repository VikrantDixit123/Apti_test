import React from 'react';
import {Provider} from 'react-redux';
import QuestionContainer from './QuestionContainer';
/***** JSON data *****/
/**
 * NOTE: We have JSON data available questions.js file. 
 * so that we can directly import the variable and use it.
 * similar thing we will use when we introduce redux, to setup initial state values.
 * We have "questionsData" as named export in questions.js and not default import.
*/
import { questionsData } from './json/questions';
import store from './redux/Store';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      // NOTE: When we need to use styling try to use className as best practice.
      // main-class is defined in style.css
      <Provider store = {store}>
      <div className="main-class">
        <h1>Below are the sample questions:</h1>
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
      </Provider>
    );
  }
}

export default App;