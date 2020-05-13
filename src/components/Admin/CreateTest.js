import React from 'react';
import Question from '../Question';
import { questionsData } from 'E:/VSCode Workspace/aptitude-test/src/data/questions';


export default class CreateTest extends React.Component {
    handleSubmit = () => {
        alert("Test has been created")
    }

    render() {
        return (
            <div>

                <div className = "admin-questions-list">
                <h3>Select the questions for the test</h3>
                    {
                        questionsData.map((question, index) => {
                            return (
                                <div key={index} >
                                    <input type="checkbox" Style='float:left'></input>
                                    <Question questionText={question.questionText} questionNumber={index + 1} />
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

