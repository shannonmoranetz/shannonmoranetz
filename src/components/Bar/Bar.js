import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'center',
  },
};

class Bar extends Component {
  handleClick = (e) => {
    this.props.retrieveView(e.target.innerText)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Button size="large" onClick={(e) => this.handleClick(e)} color="inherit">Home</Button>
            <Button size="large" onClick={(e) => this.handleClick(e)} color="inherit">Coding</Button>
            <Button size="large" onClick={(e) => this.handleClick(e)} color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Bar);