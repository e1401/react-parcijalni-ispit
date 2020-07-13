import React, { Component } from 'react';
import apiURL from './apiURL';
import Results from './Results'

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(apiURL + this.state.value)
            .then(res => res.json())
        
            .then(value => this.setState({valueFromUsers: value}))

            console.log(this.state)
    }

    
    render() {
        return (
            <div>
                <form>
                    <label onSubmit={this.handleSubmit}>
                        <input type='text' value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Submit search'></input>
                </form>
                <Results />
            </div>
        )
    }
}
