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
                 strike={props.strike}
                 ball={props.ball}
                 foul={props.foul}
                 hit={props.hit}
            />
        </div>
    )
}

export default ScoreBoard;