import React from 'react'
import { Link } from 'react-router-dom'

class Instructions extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="instructions justify-content-center">
                <div className="col-12 text-center">
                    <h4>Instructions: </h4>
                    <br></br>
                    <p>The speed of your Internet connection has NO effect on the timer.</p>
                    <p>Do not use the Back button of your browser as this may close your test.</p>
                    <p>Do not close your browser or do not switch tabs while giving the test</p>
                    <p>Read the questions carefully and select the appropriate option</p>    
                    <br /> <br />
                    <Link to="/questions">
                        <button className="btn btn-success">Start Test</button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Instructions