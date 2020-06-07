import React from 'react'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            account: 'true',
            dashboard: '',
            settings: ''
        }
    }
    handleNavToggle = (event) =>  {
        if(event.target.value === "account"){
            this.setState({
                account: 'true',
                dashboard: 'false',
                settings: 'false',                               
            })
        }
        if(event.target.value === "dashboard"){

        }
        if(event.target.value === "settings"){

        }
    }

    render() {
        return (
            <div className = "home-container">
                <div className = " col-sm-9 home-main-content">
                    <img src = "./avatar.png" className = "avatar"></img>  
                    {/*Accept prop from login as Name*/}                                      
                    <span className = "text-muted">Name: User</span>
                    <hr></hr>                 
                </div>
                <div className = "bottom-nav">
                    <div className = "btn-group btn-group-justified">
                       <div className = "btn-group">
                           <button className = "btn btn-dark nav-btn" value = "account" onClick = {this.handleNavToggle}>
                                <img src = "./account.png"></img>
                                <span className = "hint-text">Account</span>
                           </button>
                       </div>
                       <div className = "btn-group">
                           <button className = "btn btn-dark nav-btn" value = "dashboard" onClick = {this.handleNavToggle}>
                           <img src = "./dashboard.png"></img>
                           <span className = "hint-text">Dashboard</span>
                           </button>
                       </div>
                       <div className = "btn-group">
                           <button className = "btn btn-dark nav-btn" value = "settings" onClick = {this.handleNavToggle}>
                           <img src = "./settings.png"></img>
                           <span className = "hint-text">Settings</span>
                           </button>
                       </div>
                    </div>                    
                </div>
            </div>
        )
    }
}
