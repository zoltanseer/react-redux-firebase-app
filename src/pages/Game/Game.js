import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Redirect } from 'react-router-dom'

import './Game.css';

class Game extends Component {

  constructor() {
    super();
    this.state = {redirect : false}
  }

  onClickHandler() {
    this.setState({redirect: true});
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to="/newgame"/>
    }

    return (
      <div className="Game">
        <Button raised color="primary" className="add-new-game--button" onClick={this.onClickHandler.bind(this)} >
          Start game
        </Button>
      </div>
    );
  }

}

export default Game;
