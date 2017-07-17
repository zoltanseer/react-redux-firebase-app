import React from 'react';
import {
    Route,
} from 'react-router-dom'

import Index from './pages/Index/Index';
import Game from './pages/Game/Game';
import NewGame from './pages/NewGame/NewGame';

const Routes = () => (
    <div className="App-intro">
        <Route exact path="/" component={Index}/>
      <Route path="/game" component={Game}/>
      <Route path="/newgame" component={NewGame}/>
    </div>
);

export default Routes;