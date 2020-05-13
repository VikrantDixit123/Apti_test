import React from 'react';
import { Link } from 'react-router-dom'
let url = "/";

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            usertype: '',
            email: '',
            password: ''
        }
    }

    handleUserType = (event) => {
        
        this.setState({
            usertype: event.target.value
        })

    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    }

    render() {
        if(this.state.usertype === "Student"){
            url = "./start"            
        }
        
        if(this.state.usertype === "Admin"){
            url = "./admin"
        }

        return (
            <div className="login-root">
                <h3 className="aptitude-heading">Login</h3>
                <div className="login-main">
                    <div className="login">

                        <input type="radio" className="r1" name="radio" value="Student" onClick={this.handleUserType} />
                        <label className = "student">Student</label>
                        <input type="radio" className="r2" name="radio" value="Admin" onClick={this.handleUserType} />
                        <label className = "admin">Admin</label>

                        <p className="login-text">Enter your Email :</p>
                        <input className="login-input" type="text" placeholder="Email- ID" onChange={this.handleEmail}></input>
                        <br /><br /><br />
                        <p className="login-text">Enter password :</p>
                        <input className="login-input" type="password" placeholder="Password" onChange={this.handlePassword}></input>
                        <br /><br />
                        <Link to={url}>
                            <button className="login-btn">Login</button>
                        </Link>
                        <Link to="/registration">
                            <p className="anchor-tag">Not Registered Yet !! </p>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}
export default Login;