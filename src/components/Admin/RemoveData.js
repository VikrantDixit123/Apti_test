import React, { Component } from 'react'
import Question from '../Question';
import { questionsData } from 'E:/VSCode Workspace/aptitude-test/src/data/questions.js';

let data = {
    obj: {
        "Id": [],       
    },
}

export default class RemoveData extends Component {

    handleRemove = (event) => {
        if (data.obj.Id.includes(event.target.value)) {
            data.obj.Id = data.obj.Id.filter(d => d !== event.target.value);
          } else {
            data.obj.Id.push(event.target.value);
          }                    
          console.log(data.obj.Id);    
    }

    handleSubmit = () => {
        console.log("Questions are been removed");
    }

    render() {
        return (
            <div className = "remove-data-container">
                <h3 className = "text-light remove-data-heading">Select the questions to remove.....</h3>
                <div className="create-test-questions col-8 overflow-auto">
                    {
                        questionsData.map((question, index) => {
                            return (
                                <div className = "map-questions input-group-text bg-white rounded-0 border-top-0 border-right-0 border-left-0" key={index} >
                                    <input type="checkbox" className = "question-checkbox" value={question.id} onChange={this.handleRemove}></input>
                                    <Question questionText={question.questionText} questionNumber={index + 1} questionId={+new Date()} />                                    
                                </div>
                            )
                        })
                    }
                </div>
                <button className="btn btn-danger" onClick={this.handleSubmit}>Remove</button>
            </div>
        )
    }
}
