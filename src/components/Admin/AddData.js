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
    handleThirdOption = (event) => {
        this.setState({
            third_option: event.target.value
        })
    }
    handleFourthOption = (event) => {
        this.setState({
            fourth_option: event.target.value
        })
    }

    handleSubmit = () => {

    }


    render() {
        return (
            <div className="container-fuild">
                <div className="add-data-form col-8">
                    <div className="add-question">
                        <h5 className="text-light create-test-heading">Question:</h5>
                        <textarea class="form-control" required onChange={this.handleQuestion}></textarea>
                    </div>
                    <div>
                        <h5 className="text-light create-test-heading">Options:</h5>
                        <input type="text" className="form-control form-control-sm" placeholder="First option" onChange={this.handleFirstOption} required></input>
                        <br />
                        <input type="text" className="form-control form-control-sm" placeholder="Second option" onChange={this.handleSecondOption} required></input>
                        <br />
                        <input type="text" className="form-control form-control-sm" placeholder="Third option" onChange={this.handleThirdOption} required></input>
                        <br />
                        <input type="text" className="form-control form-control-sm" placeholder="Fourth option" onChange={this.handleFourthOption} required></input>
                    </div>
                    <div>
                        <h5 className="text-light create-test-heading">Experience required:</h5>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="text-light form-check-label" for="defaultCheck1">
                                None
                                    </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="text-light form-check-label" for="defaultCheck1">
                                1 year and above
                                    </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="text-light form-check-label" for="defaultCheck1">
                                5 years and above
                                    </label>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-light create-test-heading">Question type:</h5>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="text-light form-check-label" for="defaultCheck1">
                                Radio
                                    </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="text-light form-check-label" for="defaultCheck1">
                               Checkbox
                                    </label>
                        </div>
                    </div>
                    <button className="add-btn btn btn-success" onClick={this.handleSubmit}>Add</button>
                </div>
            </div>
        )
    }
}