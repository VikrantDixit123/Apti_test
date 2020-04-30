import React from 'react'

class Adminportal extends React.Component {
    render() {
        return (
            <div>
                <h1 className="Ädmin-heading">Admin Portal</h1>
                <div className="add-question">
                    <br />
                    <h3>Question:</h3>
                    <textarea className="input-box" rows="7" cols="50" placeholder = "Add a question here"></textarea>
                </div>
                <div>
                    <h3>Options:</h3>                                            
                            <input type="text" className="input-box" placeholder = "First option" required></input>
                            <br />                       
                            <input type="text" className="input-box" placeholder = "Second option" required></input>                                                                  
                            <br />                       
                            <input type="text" className="input-box" placeholder = "Third option" required></input>                                                                   
                            <br />                       
                            <input type="text" className="input-box" placeholder = "Fourth option" required></input>                                        
                </div>
                <button className = "add-btn">Add</button>
            </div>
        )
    }
}

export default Adminportal
