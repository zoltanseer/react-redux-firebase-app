import React, { Component } from 'react';
import Game from '../Game/Game';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import './Index.css';

const TabContainer = props =>
  <div style={{ padding: 30 }}>
    {props.children}
  </div>;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styleSheet = createStyleSheet('BasicTabs', theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    backgroundColor: theme.palette.background.paper,
  }
}));


class Index extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs index={this.state.index} onChange={this.handleChange}>
            <Tab label="Game" className="tab" />
            <Tab label="Statistics" className="tab" />
          </Tabs>
        </AppBar>
        {this.state.index === 0 &&
        <TabContainer>
          <Game/>
        </TabContainer>}
        {this.state.index === 1 &&
        <TabContainer>
          {'Item Two'}
        </TabContainer>}
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Index);
