import React from 'react';
import { Link } from 'react-router-dom'

/*
*   Validation not added yet
*/

class Login extends React.Component {
    render() {
        return (
            <div className = "login-root">
                <div className="login-main">
                    <h3>Aptitude Test</h3>
                    <div className="login">
                        <p className="login-text">Enter your Email :</p>
                        <input className="login-input" type="text" placeholder="Email- ID"></input>
                        <br /><br /><br />
                        <p className="login-text">Enter password :</p>
                        <input className="login-input" type="password" placeholder="Password"></input>
                        <br /><br />
                        <Link to="/questions">
                            <button className="login-btn">Start Test</button>
                        </Link>
                    </div>
                    <div className="instructions">
                        <h4>Instructions: </h4>
                        <br></br>
                        <ul>
                            <li>
                                First Instruction
                        </li>
                            <li>
                                Second Instruction
                        </li>
                            <li>
                                Third Instruction
                        </li>
                            <li>
                                Fourth Instruction
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;