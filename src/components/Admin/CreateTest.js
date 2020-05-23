import React from 'react';
import Question from '../Question';
import { questionsData } from 'D:/Vikrant/aptitude-test/src/data/questions';

let data = {
    obj: {
        "Id": "",
        "questions": []
    },
}

export default class CreateTest extends React.Component {

    handleSubmit = () => {
        //Submit the object as a template in this function
        data.obj.Id = (+new Date());
        console.log(data.obj.questions);
        console.log(data.obj.Id);
        
    }

    handleChange = (event) => {   
        if (data.obj.questions.includes(event.target.value)) {
            data.obj.questions = data.obj.questions.filter(d => d !== event.target.value);
          } else {
            data.obj.questions.push(event.target.value);
          }                     
        console.log(data.obj.questions);     
    }


    render() {
        return (
            <div>

                <div className="admin-questions-list">
                    <h3>Select the questions for the test</h3>
                    {
                        questionsData.map((question, index) => {
                            return (
                                <div key={index} >
                                    <input type="checkbox" Style='float:left' value = {question.id} onChange = {this.handleChange}></input>
                                    <Question questionText={question.questionText} questionNumber={index + 1} questionId={+new Date()} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="admin-right-content">
                    <div className="create-test-form">
                        <label className="create-test-label">Enter the time limit for the test(in mins):</label>
                        <input className="create-test-input" type="number" />
                        <br />
                        <button className="create-test-btn" onClick={this.handleSubmit}>Create Test</button>
                    </div>
                </div>


            </div>
        )
    }
}

