import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'center',
  }
}));

function Bar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button size="large" color="inherit">Home</Button>
          <Button size="large" color="inherit">Coding</Button>
          <Button size="large" color="inherit">Art</Button>
          <Button size="large" color="inherit">Music</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Bar;