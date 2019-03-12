import React from 'react';

import Display from '../display/Display';
import Dashboard from '../dashboard/Dashboard';

function ScoreBoard(props) {
    return (
        <div>
            <Display 
                player={props.player} 
                strikes={props.strikes}
                balls={props.balls} 
            />
            <Dashboard 
                 player={props.player} 
                 strikes={props.strikes}
                 balls={props.balls} 
            />
        </div>
    )
}

export default ScoreBoard;