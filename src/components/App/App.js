import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
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
          <Paper>
            <About/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
