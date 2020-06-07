import React from 'react'   

class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',            
            phone_no: '',
            address: '',
            email_id: '',
            dob: '', 
            password: ''           
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
            dob: event.target.value,
        });
    }

    handleSubmit = (event) => {
        alert("Details submitted successfully");
    }

    render() {
        return (
            <div className=" container-fluid reg-container">
                <div className="row justify-content-center">
                    <div className="col-4 mr-5 text-center">
                        <h1 className = "welcome-text">Welcome to Xoriant Solutions</h1>
                        <h3> Enter the details for registration</h3>
                    </div>
                    <div className="col-8 col-sm-5 col-md-4 ml-5">
                        <form className="form-container">
                            
                            <div className="form-group">
                                <label htmlFor="InputName ">Full name</label>
                                <input type="name" className="form-control form-control-sm" id="InputName" onChange = {this.handleName}/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email ID</label>
                                <input type="email" className="form-control form-control-sm" id="InputEmail" onChange = {this.handleEmail}/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="InputAddress">Address</label>
                                <input type="address" className="form-control form-control-sm" id="InputAddress" onChange = {this.handleAddress}/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="InputPhone">Phone number</label>
                                <input type="phone" className="form-control form-control-sm" id="InputPhone" onChange = {this.handlePhoneNo}/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="InputDate">D-o-B</label>
                                <input type="date" className="form-control form-control-sm" id="InputDate" onChange = {this.handleDateOfBirth}/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="InputPassword">Password</label>
                                <input type="password" className="form-control form-control-sm" id="InputPassword" onChange = {this.handlePassword}/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-block btn-sm" onClick = {this.handleSubmit}>Register</button>
                            
                            <a className="row justify-content-center" href="#"><span className="register-link" >Already registered !</span></a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Registration;