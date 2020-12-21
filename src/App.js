import React from 'react';
import Card from './Card';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

const App = (props) => {
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>
    );
};

export default App;