import React, { Component } from 'react'

export class FetchRandomUser extends Component {
    
    // Set the default state.
    state = {
        isLoading: true,
        person: null
    }

    // Re-renders on state change
    async componentDidMount() {
        // Set img src
        const url = "https://api.randomuser.me/";
        // Syncronous 
        const response = await fetch(url);
        const data = await response.json();
        // Setting new state once loaded
        this.setState({
            person: data.results[0],
            isLoading: false
        });
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        if (!this.state.person)  {
            return <div>Didn't load person!</div>
        }

        return (
            <div>
                <div>{this.state.person.name.title}</div>
                <div>{this.state.person.name.first}</div>
                <div>{this.state.person.name.last}</div>
                <img src={this.state.person.picture.large} />
            </div>
        )
    }
}

export default FetchRandomUser
