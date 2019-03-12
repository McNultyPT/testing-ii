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
    if (this.state.strikes <= 2) {
      this.setState((prevState) => {
       return {
         strikes: ++prevState.strikes
       }
      })
    } else {
      this.setState({
        strikes: 0
      })
    }
  }

  render() {
    return (
      <div className="App">
        <ScoreBoard 
          player={this.state.player} 
          strikes={this.state.strikes}
          balls={this.state.balls}
          strike={this.strike}
        />
      </div>
    );
  }
}

export default App;
