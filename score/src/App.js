import React from 'react';

import './App.css';
import ScoreBoard from './scoreboard/ScoreBoard';

class App extends React.Component {
  state = {
    player: 'player1',
    strikes: 0,
    balls: 0
  }

  strike = () => {
    
  }

  render() {
    return (
      <div className="App">
        <ScoreBoard 
          player={this.state.player} 
          strikes={this.state.strikes}
          balls={this.state.balls}
        />
      </div>
    );
  }
}

export default App;
