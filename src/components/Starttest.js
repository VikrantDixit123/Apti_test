import React from 'react'
import { Link } from 'react-router-dom'

class Starttest extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="instructions">
                    <h4>Instructions: </h4>
                    <br></br>
                    <ul>
                        <li>
                            The speed of your Internet connection has NO effect on the timer.
                        </li>
                        <li>
                            Do not use the Back button of your browser as this may close your test.
                        </li>
                        <li>
                                Do not close your browser or do not switch tabs while giving the test
                        </li>
                            <li>
                                Read the questions carefully and select the appropriate option
                        </li>
                    </ul>                    
                </div>
                    <div className="start-btn-div">
                        <Link to="./questions">
                            <button className="start-btn">Start Test</button>
                        </Link>
                    </div>
                </div>
        )
    }

}

export default Starttest