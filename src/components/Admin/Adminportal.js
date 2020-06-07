import React from 'react'
import LeftContent from './LeftContent'
import CreateTest from './CreateTest'
import AddData from './AddData'
import RemoveData from './RemoveData'
import Home from './Home'

class Adminportal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            home: 'true',
            create_test: '',
            add_data: '',
            remove_data: '',            
        }
    }

    handleContentList = (event) => {
        if (event.target.value === "home") {
            this.setState({
                home: 'true',
                create_test: 'false',
                add_data: 'false',
                remove_data: 'false',                
            })
        }
        else if (event.target.value === "createTest") {
            this.setState({
                home: 'false',
                create_test: 'true',
                add_data: 'false',
                remove_data: 'false',                
            })
        }
        else if (event.target.value === "addData") {
            this.setState({
                home: 'false',
                create_test: 'false',
                add_data: 'true',
                remove_data: 'false',                
            })
        }
        else if (event.target.value === "removeData") {
            this.setState({
                home: 'false',
                create_test: 'false',
                add_data: 'false',
                remove_data: 'true',               
            })
        }
        
    }

    render() {
        if (this.state.home === "true") {
            return (
                <div className="row nopadding admin-container container-fuild">
                    <div className="col-lg-2 col-sm-4 nopadding">
                        <LeftContent onClick={this.handleContentList} />
                    </div>
                    <div className="col-lg-10 col-sm-8 nopadding">
                        <Home />
                    </div>
                </div>
            )
        }
        if (this.state.create_test === "true") {
            return (
                <div className="row nopadding admin-container container-fuild">
                    <div className="col-lg-2 col-sm-4 nopadding">
                        <LeftContent onClick={this.handleContentList} />
                    </div>
                    <div className="col-lg-10 col-sm-8 nopadding">
                        <CreateTest />
                    </div>
                </div>
            )
        }
        if (this.state.add_data === "true") {
            return (
                <div className="row nopadding admin-container container-fuild">
                    <div className="col-lg-2 col-sm-4 nopadding">
                        <LeftContent onClick={this.handleContentList} />
                    </div>
                    <div className="col-lg-10 col-sm-8 nopadding">
                        <AddData />
                    </div>
                </div>
            )
        }
        if (this.state.remove_data === "true") {
            return (
                    <div className="row nopadding admin-container container-fuild">
                        <div className="col-lg-2 col-sm-4 nopadding">
                            <LeftContent onClick={this.handleContentList} />
                        </div>
                        <div className="col-lg-10 col-sm-8 nopadding">
                            <RemoveData />
                        </div>
                    </div>
            )
        }
       
    }
}

export default Adminportal

