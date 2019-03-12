import React from 'react';

function Display(props) {
    return (
        <div>
            <h2>Display</h2>
            <div>
                <h3>Player: {props.player}</h3>
                <h3>Strikes: {props.strikes}</h3>
                <h3>Balls: {props.balls}</h3>
            </div>
        </div>
    );
}

export default Display;