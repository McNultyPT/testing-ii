import React from "react";

import "./App.css";
import Dashboard from './dashboard/Dashboard';

class App extends React.Component {
  state = {
    player: "player1",
    strikes: 0,
    balls: 0
  };

  strike = () => {
    if (this.state.strikes <= 2) {
      this.setState(prevState => {
        return {
          strikes: ++prevState.strikes
        };
      });
    } else {
      this.setState({
        strikes: 0,
        balls: 0
      });
    }
  };

  ball = () => {
    if (this.state.balls <= 3) {
      this.setState(prevState => {
        return {
          balls: ++prevState.balls
        };
      });
    } else {
      this.setState({
        balls: 0,
        strikes: 0
      });
    }
  };

  foul = () => {
    if (this.state.strikes <= 1) {
      this.setState(prevState => {
        return {
          strikes: ++prevState.strikes
        };
      });
    } else {
      return this.state.strikes;
    }
  };

  hit = () => {
    this.setState({
      strikes: 0,
      balls: 0
    });
  };

  render() {
    return (
      <div className="App">
        <Dashboard
          player={this.state.player}
          strikes={this.state.strikes}
          balls={this.state.balls}
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
        />
      </div>
    );
  }
}

export default App;
