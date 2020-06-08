import React from 'react';
import { Link } from 'react-router-dom'
let url = "/";

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            usertype: 'false',
            email: '',
            password: ''
        }
    }

    handleUserType = () => {

        if (this.state.usertype === "false") {
            this.setState({
                usertype: "true"
            })
        }
        if (this.state.usertype === "true") {
            this.setState({
                usertype: "false"
            })
        }
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
        if (this.state.usertype === "false") {
            url = "./start"
        }

        if (this.state.usertype === "true") {
            url = "./admin"
        }

        return (
            <div className="container-fluid login-container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-3">
                        <form className="login-form-container">
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email address</label>
                                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={this.handleEmail} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" className="form-control" id="Password" onChange={this.handlePassword}/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="Check"  onChange={this.handleUserType}/>
                                <label className="form-check-label" htmlFor="Check">Admin Login</label>
                            </div>
                            <Link to={url}>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </Link>
                            <Link to = "/registration" >
                                <a className="row justify-content-center" href="#"><span className="register-link" >Not registered Yet !</span></a>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;