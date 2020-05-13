import React from 'react'

export default class LeftContent extends React.Component {
    render() {
        return (
            <div>                            
                <div className="admin-left-content">                    
                    <button className="content-list" value="createTest" onClick={this.props.onClick}>Create test</button>
                    <hr />
                    <button className="content-list" value="addData" onClick={this.props.onClick}>Add Data</button>
                    <hr />
                    <button className="content-list" value="removeData" onClick={this.props.onClick}>Remove Data</button>
                    <hr />                                        
                </div>  
                <div className = "vl"></div>
            </div>
        )
    }
}
