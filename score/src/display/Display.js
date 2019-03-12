import React from 'react';

function Display(props) {
    return (
        <div>
            <h2>Display</h2>
            {props.atBat.map(p => (
                <div>
                    <h3>Player: {p.player} </h3>
                    <h4>Strikes: {p.strikes} </h4>
                    <h4>Balls: {p.balls} </h4>
                </div>
            ))}
        </div>
    );
}

export default Display;