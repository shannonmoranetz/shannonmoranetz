import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Bar from '../Bar/Bar';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// git test comment

const styles = {
  root: {
    margin: 0,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
  },
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'HOME'
    }
  }

  retrieveView = (view) => {
    this.setState({ view })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="column" justify="center" spacing={1}>
          <Grid item xs>
            <Header/>
          </Grid>
          <Grid item xs>
            <Bar retrieveView={this.retrieveView} />
          </Grid>
          <Grid item xs>
            <Paper>
              <CardContainer view={this.state.view} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
