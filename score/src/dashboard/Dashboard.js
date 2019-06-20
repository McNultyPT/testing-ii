import React from 'react';

import Display from '../display/Display';

function Dashboard(props) {
    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <button onClick={props.strike}>Strike</button>
                <button onClick={props.ball}>Ball</button>
                <button onClick={props.foul}>Foul</button>
                <button onClick={props.hit}>Hit</button>
            </div>
            <Display
                player={props.player}
                strikes={props.strikes}
                balls={props.balls}
            />
        </div>
    );
}

export default Dashboard;