import React from 'react'
import LeftContent from './LeftContent'
import CreateTest from './CreateTest'
import AddData from './AddData'
import RemoveData from './RemoveData'

class Adminportal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            create_test: 'true',
            add_data: '',
            remove_data: ''
        }
    }

    handleContentList = (event) => {
        if (event.target.value === "createTest") {
            this.setState({
                create_test: 'true',
                add_data: 'false',
                remove_data: 'false'
            })
        }
        else if (event.target.value === "addData") {
            this.setState({
                create_test: 'false',
                add_data: 'true',
                remove_data: 'false'
            })
        }
        else if (event.target.value === "removeData") {
            this.setState({
                create_test: 'false',
                add_data: 'false',
                remove_data: 'true'
            })
        }
    }

    render() {
        if (this.state.create_test === "true") {
            return (
                <div>
                    <LeftContent onClick = {this.handleContentList}/>
                    <CreateTest />
                </div>
            )
        }
        if (this.state.add_data === "true") {
            return (
                <div>
                    <LeftContent onClick = {this.handleContentList}/>
                    <AddData />
                </div>
            )
        }
        if (this.state.remove_data === "true") {
            return (
                <div>
                    <LeftContent onClick = {this.handleContentList}/>
                    <RemoveData />
                </div>
            )
        }
    }
}

export default Adminportal

