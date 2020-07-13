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
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type='text' value='' onChange='' />
                    </label>
                    <input type='submit' value='Submit search'></input>
                </form>
                
            </div>
        )
    }
}
