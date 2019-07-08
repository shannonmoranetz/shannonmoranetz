import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { contactCardData } from './contactCardData';
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

function ContactCards() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} align="center">
        { contactCardData.map((datum, i) => {
          return (
            <Grid item xs key={i}>
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

export default ContactCards;