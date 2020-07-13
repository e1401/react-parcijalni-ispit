import React, { Component } from 'react';
import apiURL from './apiURL'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: '',
            value: '',
            valueFromUsers: {},
            //future value from repos
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <label onSubmit={this.handleSumbit}>
                        <input type='text' value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Submit search'></input>
                </form>
                
            </div>
        )
    }
}
