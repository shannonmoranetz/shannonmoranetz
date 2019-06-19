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
    width: 200
  },
  media: {
    height: 80,
    paddingTop: '56.25%', // 16:9
  }
}));

function BioCards() {
  const classes = useStyles();
  return (
    <div className="BioCards">
      <Card style={{display: 'inline-block'}} className={classes.card}>
        
        <CardHeader title="Shannon" subheader="blah"/>
        <CardMedia className={classes.media} image="https://i.imgur.com/2QgJp9K.jpg" title="Shannon"/>
      </Card>
    </div>
  );
}

export default BioCards;