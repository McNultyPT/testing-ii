import React from 'react';

import Display from '../display/Display';
import Dashboard from '../dashboard/Dashboard';

function ScoreBoard(props) {
    return (
        <div>
            <Display atBat={props.atBat} />
            <Dashboard atBat={props.atBat} />
        </div>
    )
}

export default ScoreBoard;