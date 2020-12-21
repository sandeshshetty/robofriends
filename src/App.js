import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

// Use class mode instead of method to use state
class App extends Component {

    constructor() {
        // Always call super before accessing this
        super();
        this.state = {
            robots: robots,
            searchField: ''
        };
    }

    // Use arrow operator for this reference in event callbacks
    onSearchChange = (event) => {
        // Use instead of this.state.searchField = ''
        this.setState({ searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(
                this.state.searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='ttu f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
};

export default App;