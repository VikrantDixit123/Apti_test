import React from 'react'

export default class AddData extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             question: '',
             first_option: '',
             second_option: '',
             third_option: '',
             fourth_option: ''
        }
    }

    handleQuestion = (event) => {        
        this.setState({
            question: event.target.value
        })
    }

    handleFirstOption = (event) => {        
            this.setState({
                first_option: event.target.value
            })        
    }
    handleSecondOption = (event) => {
            this.setState({
                second_option: event.target.value
            })        
    }
    handleThirdOption = (event) =>{       
            this.setState({
                third_option: event.target.value
            })    
    }
    handleFourthOption =(event) =>{        
            this.setState({
                fourth_option: event.target.value
            })
    }

    handleSubmit = () =>{

    }

    
    render() {
        return (
            <div className="admin-right-content">
                <div className = "admin-add-data">                    
                    <div className="add-question">
                        <br />
                        <h3>Question:</h3>
                        <textarea className="admin-input-box" rows="7" cols="50" placeholder="Add a question here" onChange = {this.handleQuestion}></textarea>
                    </div>
                    <div>
                        <h3>Options:</h3>
                        <input type="text" className="admin-input-box" placeholder="First option" onChange = {this.handleFirstOption} required></input>
                        <br />
                        <input type="text" className="admin-input-box" placeholder="Second option" onChange = {this.handleSecondOption} required></input>
                        <br />
                        <input type="text" className="admin-input-box" placeholder="Third option" onChange = {this.handleThirdOption} required></input>
                        <br />
                        <input type="text" className="admin-input-box" placeholder="Fourth option" onChange = {this.handleFourthOption} required></input>
                    </div>
                    <button className="add-btn" onClick = {this.handleSubmit}>Add</button>
                </div>
            </div>
        )
    }
}