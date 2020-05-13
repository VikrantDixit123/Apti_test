import React from 'react'
import { Redirect } from "react-router-dom";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: '00',
            minutes: '',
            finishStatus: false
        }
        
    }

    handleChange = () => {
        this.setState({
            minutes: this.props.time
        })
    }

    tick = () => {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);
        this.setState({
            minutes: min,
            seconds: sec
        })

        if (sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds,
            })
        }
        if (min < 10) {
            this.setState({
                value: "0" + min,
            })
        }
        if (min === 0 & sec === 0) {
            clearInterval(this.intervalHandle);
            this.setState({
                finishStatus: true,
            })           
        }
        this.secondsRemaining--
    }

    componentDidMount = () => {
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.props.time;
        this.secondsRemaining = time * 60;
    }

    render() {
        if(this.state.finishStatus === true){
            return(
                <Redirect to = "/" />
            )
        }
            return (
                <div>
                    {this.state.minutes} : {this.state.seconds}
                </div>
            );        
    }

}

export default Timer