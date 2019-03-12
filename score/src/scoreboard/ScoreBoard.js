import React from 'react';

import Display from '../display/Display';
import Dashboard from '../dashboard/Dashboard';

class ScoreBoard extends React.Component {
    render() {
        return(
            <div>
              <Display />
              <Dashboard />  
            </div>
        );
    }
}

export default ScoreBoard;