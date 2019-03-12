import React from 'react';

function Dashboard(props) {
    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.ball}>Ball</button>
            <button onClick={props.foul}>Foul</button>
            <button>Hit</button>
        </div>
    );
}

export default Dashboard;