import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  card: {
    width: 260,
    display: 'inline-block',
  },
  media: {
    height: 45,
    paddingTop: '56.25%',
  },
  grid: {

  }
}));

function HomeCards() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs>
          <Card className={classes.card}>
            <CardHeader title="Card title" subheader="Card subtitle"/>
            <CardMedia className={classes.media} image="https://i.imgur.com/9yoT99d.jpg" title="Shannon"/>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Card content
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.card}>
            <CardHeader title="Card title" subheader="Card subtitle"/>
            <CardMedia className={classes.media} image="https://i.imgur.com/WtvMJa2.jpg" title="Shannon"/>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Card content
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.card}>
            <CardHeader title="Card title" subheader="Card subtitle"/>
            <CardMedia className={classes.media} image="https://i.imgur.com/9yoT99d.jpg" title="Shannon"/>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Card content
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.card}>
            <CardHeader title="Card title" subheader="Card subtitle"/>
            <CardMedia className={classes.media} image="https://i.imgur.com/WtvMJa2.jpg" title="Shannon"/>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Card content
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeCards;