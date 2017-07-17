import React, { Component } from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import List, {
  ListItem,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import TextField from 'material-ui/TextField';

import * as firebase from 'firebase';

import './NewGame.css';

class NewGame extends Component {

  constructor() {
    super();

    this.state = {
      date: new Date().toLocaleString(),
      players: [],
      newplayer: "",
      dialogOpen: false
    }
  }

  goBack() {
    console.log(this.context);
  }

  addingPlayer(event) {
    this.setState({newplayer: event.target.value});
  }

  savePlayer(name) {
    if (this.state.newplayer !== "") {
      this.setState({
        players: this.state.players.concat({
          name: this.state.newplayer,
          points: 0,
          id: this.state.players.length
        })
      });
    }

    this.setState({newplayer: ""});
    this.setState({open: false});
  }

  handleRequestClose() {
    this.setState({newplayer: ""});
    this.setState({open: false});
  }

  addNewPlayer() {
    this.setState({open: true});
  }

  saveGame() {

  }

  addPoint(index) {
    const { players } = this.state;
    players[index].points++;
    this.setState({players : players});
  }

  removePoint(index) {
    const { players } = this.state;
    if (players[index].points > 0) {
      players[index].points--;
      this.setState({players : players});
    }
  }

  render() {
    return (
      <div className="new-game">
        <header>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography type="title" color="inherit">
                <Button onClick={this.goBack.bind(this)}><i className="material-icons">keyboard_arrow_left</i> back</Button>
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <div className="new-game--content">
          <List subheader={<ListSubheader>Players</ListSubheader>}>

              {this.state.players.map((player) => { return(
                <ListItem key={player.id} className="list-item">
                  <ListItemText className="list-title" primary={player.name} />
                  <div className="points">{player.points}</div>
                  <div className="actions">
                    <IconButton aria-label="add" onClick={this.addPoint.bind(this, player.id)}>
                      <i className="material-icons">add_circle</i>
                    </IconButton>
                    <IconButton aria-label="remove" onClick={this.removePoint.bind(this, player.id)}>
                      <i className="material-icons">remove_circle</i>
                    </IconButton>
                  </div>
                </ListItem>
              )
              })}
          </List>
        </div>
        <BottomNavigation showLabels className="new-game--footer">
          <BottomNavigationButton onClick={this.addNewPlayer.bind(this)} label="Add player" icon={<i className="material-icons">account_circle</i>} />
          <BottomNavigationButton onClick={this.saveGame.bind(this)} label="Save game" icon={<i className="material-icons">check_circle</i>} />
        </BottomNavigation>

        <Dialog onRequestClose={this.handleRequestClose} open={this.state.open}>
          <DialogTitle>Add new player</DialogTitle>
          <TextField
            id="name"
            label="Player name"
            type="text"
            onChange={this.addingPlayer.bind(this)}
            fullWidth
            marginForm
          />
          <Button raised color="primary" onClick={this.savePlayer.bind(this)}>
            Save
          </Button>
        </Dialog>
      </div>
    );
  }
}

export default NewGame;
