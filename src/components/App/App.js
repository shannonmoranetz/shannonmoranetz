import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import AppBar from '../AppBar/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <div className="App">
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item xs>
          <Paper>
            <Header/>
          </Paper>
        </Grid>
        <Grid item xs>
          <AppBar/>
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
