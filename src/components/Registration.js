import React from 'react'
import { Link } from 'react-router-dom'

class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            phone_no: '',
            email_id: '',
            dob: '',
            college: '',
            passing: ''
        };
    }

    handleFirstName = (event) => {
        this.setState({
            firstname: event.target.value,
        });
    }

    handleLastName = (event) => {
        this.setState({
            lastname: event.target.value,
        });
    }

    handlePhoneNo = (event) => {
        this.setState({
            phone_no: event.target.value,
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

    handleCollegeName = (event) => {
        this.setState({
            college: event.target.value,
        });
    }

    handleYearOfPassing = (event) => {
        this.setState({
            passing: event.target.value,
        });
    }

    handleSubmit = (event) => {
        console.log("Details submitted successfully");
    }

    render() {
        return (
            <div>
                <h3 className = "registration-heading">Registration</h3>
                <div className="registration-main">                    
                    <form onSubmit={this.handleSubmit}>
                        <label className="label">
                            Name:
                        </label>
                        <input type="text" className="name-box" placeholder="First name" onChange={this.handleFirstName} />
                        <input type="text" className="name-box" placeholder="Last name" onChange={this.handleLastName} />
                        <br />
                        <label className="label">
                            PhoneNo:
                        </label>
                        <input type="tel" pattern="[0-9]{10}" className="input-box" placeholder="Phone number" onChange={this.handlePhoneNo} />
                        <br />
                        <label className="label">
                            Email.ID:
                        </label>
                        <input type="email" className="input-box" placeholder="example@gmail.com" onChange={this.handleEmail} />
                        <br />
                        <label className="label">
                            D-O-B:
                        </label>
                        <input type="date" className="input-box" placeholder="Date of birth" onChange={this.handleDateOfBirth} />
                        <br />
                        <label className="label">
                            College Name:
                        </label>
                        <input type="text" className="input-box" placeholder="College Name" onChange={this.handleCollegeName} />
                        <br />
                        <label className="label">
                            Pass:
                        </label>
                        <input type="number" className="input-box" placeholder="Year of Passing" onChange={this.handleYearOfPassing} />
                        <br />
                        <input type="submit" className="submit-btn" value="Submit" /> 
                        <Link to="/">
                        <p className = "anchor-tag"><a href = "https://localhost:3000/#/">Already Registered !! </a></p>  
                        </Link>                                                
                    </form>                   
                </div>                
            </div>
        )
    }
}


export default Registration;