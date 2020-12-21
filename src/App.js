import React from 'react';
import Card from './Card';
import CardList from './CardList';
import { robots } from './robots';

const App = (props) => {
    return (<>
        <h1>RoboFriends</h1>
        <CardList robots={robots} />
    </>);
};

export default App;