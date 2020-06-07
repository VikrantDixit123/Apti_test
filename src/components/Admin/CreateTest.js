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
            <div className="create-test-container">
                <h3 className = "text-muted create-test-heading">Select the questions for the test....</h3>                
                <div className="create-test-questions overflow-auto">
                    {
                        questionsData.map((question, index) => {
                            return (
                                <div className="map-questions input-group-text bg-white rounded-0" key={index} >
                                    <input type="checkbox" value={question.id} onChange={this.handleChange}></input>
                                    <Question questionText={question.questionText} questionNumber={index + 1} questionId={+new Date()} />                                    
                                </div>
                            )
                        })
                    }
                </div>

                <div className="">
                    <div className="">
                        <label className="">Enter the name of the test:</label>
                        <input className="" type="text" />
                        <br />
                        <button className="btn btn-success" onClick={this.handleSubmit}>Create Test</button>
                    </div>
                </div>


            </div>
        )
    }
}

