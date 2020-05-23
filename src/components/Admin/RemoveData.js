import React, { Component } from 'react'
import Question from '../Question';
import { questionsData } from 'D:/Vikrant/aptitude-test/src/data/questions';

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
            <div className="admin-right-content">
                <div className="admin-remove-data">
                    {
                        questionsData.map((question, index) => {
                            return (
                                <div key={index} >
                                    <input type="checkbox" Style='float:left' value={question.id} onChange={this.handleRemove}></input>
                                    <Question questionText={question.questionText} questionNumber={index + 1} questionId={+new Date()} />
                                </div>
                            )
                        })
                    }
                </div>
                <button className="create-test-btn" onClick={this.handleSubmit}>Remove</button>
            </div>
        )
    }
}
