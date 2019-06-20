import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { codingCardData } from './codingCardData';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    width: 240,
    display: 'inline-block',
  },
  media: {
    height: 45,
    paddingTop: '56.25%',
  },
}));

function CodingCards() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} align="center">
        { codingCardData.map((datum) => {
          return (
            <Grid item xs>
              <Card className={classes.card}>
                <CardHeader title={datum.title} subheader={datum.subheader}/>
                <CardMedia className={classes.media} image={datum.image}/>
                <CardContent>
                  <Typography color="textSecondary">{datum.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        }) }
      </Grid>
    </div>
  );
}

export default CodingCards;