import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import Bar from '../Bar/Bar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 20
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item xs>
          <Paper>
            <Header/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Bar/>
        </Grid>
        <Grid item xs>
          <Paper>
            <CardContainer/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
