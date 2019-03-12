import React from 'react';

import './App.css';
import ScoreBoard from './scoreboard/ScoreBoard';

class App extends React.Component {
  state = {
    atBat: [
      {id: 1, player: 'player1', strikes: 0, balls: 0},
      // {id: 2, name: 'player2', strikes: 0, balls: 0},
      // {id: 3, name: 'player3', strikes: 0, balls: 0}
    ]
  }

  render() {
    return (
      <div className="App">
        <ScoreBoard atBat={this.state.atBat} />
      </div>
    );
  }
}

export default App;
