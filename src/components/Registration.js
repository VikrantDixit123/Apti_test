import React from 'react'
import { Link } from 'react-router-dom';

class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phone_no: '',
            address: '',
            email_id: '',
            dob: '',
            password: '',
            hidden: 'true'
        };
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value,
        });
    }

    handlePhoneNo = (event) => {
        this.setState({
            phone_no: event.target.value,
        });
    }

    handleAddress = (event) => {
        this.setState({
            address: event.target.value,
        });
    }

    handleEmail = (event) => {
        this.setState({
            email_id: event.target.value,
        });
    }

    handleDateOfBirth = (event) => {
        this.setState({
            dob: event.target.value,
        });
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    }

    showPasswordFunction = () => {
        this.setState({ hidden: !this.state.hidden });
      }
      

    handleSubmit = (event) => {
        alert("Details submitted successfully");
    }

    render() {
        return (
            <div className=" container-fluid reg-container">
                <div className="row justify-content-center">
                    <div className="col-4 mr-5 text-center">
                        <h1 className="welcome-text">Welcome to Xoriant Solutions</h1>
                        <h3> Enter the details for registration</h3>
                    </div>
                    <div className="col-8 col-sm-5 col-md-4 ml-5">
                        <form className="reg-form-container">

                            <div className="form-group">
                                <label htmlFor="InputName ">Full name</label>
                                <input type="name" className="form-control form-control-sm" id="InputName" onChange={this.handleName} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputEmail">Email ID</label>
                                <input type="email" className="form-control form-control-sm" id="InputEmail" onChange={this.handleEmail} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputAddress">Address</label>
                                <input type="address" className="form-control form-control-sm" id="InputAddress" onChange={this.handleAddress} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputPhone">Phone number</label>
                                <input type="phone" className="form-control form-control-sm" id="InputPhone" onChange={this.handlePhoneNo} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputDate">D-o-B</label>
                                <input type="date" className="form-control form-control-sm" id="InputDate" onChange={this.handleDateOfBirth} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputPassword">Password</label>
                                <input type={this.state.hidden ? "password" : "text"} className="form-control form-control-sm" id="InputPassword" onChange={this.handlePassword} required/>
                                <input type="checkbox" onClick={this.showPasswordFunction} /> Show Password
                            </div>
                            <Link to="/">
                                <button type="submit" className="btn btn-primary btn-block btn-sm" onClick={this.handleSubmit}>Register</button>
                            </Link>
                            <a className="row justify-content-center" href="#"><span className="register-link" >Already registered !</span></a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Registration;