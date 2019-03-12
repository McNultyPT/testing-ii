import React from 'react';

import Display from '../display/Display';
import Dashboard from '../dashboard/Dashboard';

function ScoreBoard(props) {
    return (
        <div>
            <Display players={props.players} />
            <Dashboard players={props.players} />
        </div>
    )
}

export default ScoreBoard;