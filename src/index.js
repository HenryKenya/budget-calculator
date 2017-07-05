// Importing major modules
import React from 'react';
import ReactDOM from 'react-dom';
import './budget.css';

// Importing Components
import Total from './components/Total';

var budget =
    [
        { name: 'House rent', price: 10000 },
        { name: 'Gas refill', price: 1000, },
        { name: 'Internet', price: 1500 },
        { name: 'Shopping', price: 1500 }
    ]

ReactDOM.render(
    <Total items={budget} />, document.getElementById('root')
)