import React from 'react';

import './App.css';
import ScoreBoard from './scoreboard/ScoreBoard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
