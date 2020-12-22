import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// Use class mode instead of method to use state
class App extends Component {

    constructor() {
        // Always call super before accessing this
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    // Since this is part of react, arrow function not mandatory
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    // Use arrow operator for this reference in event callbacks
    onSearchChange = (event) => {
        // Use instead of this.state.searchField = ''
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(
                searchField.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1 className='ttu f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    {!robots.length && <h2>Loading</h2>}
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
};

export default App;