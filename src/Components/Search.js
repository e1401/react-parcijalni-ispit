import React, { Component } from 'react';
import apiURL from './apiURL';
import Results from './Results'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // key: '',
            value: '',
            valueFromApi: {},
            valueFromRepos:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.value.length === 0) {
            alert('The search box is empty')
            return;

        } else {
            this.setState({value: ''})
        }

        fetch(apiURL + this.state.value)
            
            
            .then(res => res.json())
            .then(value => this.setState({valueFromApi: value}))
            
            
        
            fetch(apiURL + this.state.value +'/repos')
            
            
            .then(res => res.json())
            .then(value => this.setState({valueFromRepos: value}))
            .then(this.setState({value: ''}))

            console.log(this.state)

            
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit search"></input>
                    
                </form>
                <Results val={this.state.valueFromApi} valFromRepos={this.state.valueFromRepos} />
            </div>
        )
    }
}
