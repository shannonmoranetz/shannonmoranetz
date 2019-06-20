import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'center',
  }
};

class Bar extends Component {
  constructor() {
    super();
    this.state = {
      view: 'HOME'
    }
  }

  handleClick = (e) => {
    this.setState({ view: e.target.innerText })
  }

  render() {
    const { view } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Button size="large" onClick={(e) => this.handleClick(e)} color="inherit">Home</Button>
            <Button size="large" onClick={(e) => this.handleClick(e)} color="inherit">Coding</Button>
            <Button size="large" onClick={(e) => this.handleClick(e)} color="inherit">Art</Button>
            <Button size="large" onClick={(e) => this.handleClick(e)} color="inherit">Music</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Bar);