import React from 'react';
import App from './App'
import Logout from './Logout';

let Timer = null;

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: props.startCount
        }
    }

    render() {
        const { count } = this.state
        if (count > 0) {
            return (
                <div>
                    <h2 className = "Time">Time: {count}</h2>
                    <App />
                </div>
            )
            
        }
        else {                        
            clearInterval(Timer)
            Timer = null; 
            /*
            * We can add feedback form in the logout component        
            */           
            return (
                <div>                    
                    <Logout />
                </div>
            )

        }
        
    }

    componentDidMount() {
        if (this.state.count > 0) {
            Timer = setInterval(() => {
                this.setState({
                    count: this.state.count - 1
                })
            }, 1000)
            
        }
    }


}

export default Counter;