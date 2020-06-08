import React from 'react'
import { Redirect } from "react-router-dom";

export default class LeftContent extends React.Component {
    
    render() {

        return (
            <div className="wrapper">
                <nav className="sidebar">
                    <ul class="list-unstyled components">
                        <li class="active">
                            <button value="home" onClick={this.props.onClick}>Home</button>
                        </li>

                        <li>
                            <button value="createTest" onClick={this.props.onClick}>Create Test</button>
                        </li>
                        <li>
                            <button value="addData" onClick={this.props.onClick}>Add Question</button>
                        </li>
                        <li>
                            <button value="removeData" onClick={this.props.onClick}>Remove Questions</button>
                        </li>
                        <li>
                            <button value="logout"><a href = "#" className = "admin-logout">Logout</a></button>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}
