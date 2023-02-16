import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import millify from 'millify';
import User from "../user/User";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: '5rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  title: {
    marginTop: '1rem',
  },
  price: {
    fontWeight: 'bold',
    marginTop: '1rem',
  },
  likes: {
    marginTop: '1rem',
  },
});

const CardComponent = ({ name, likes, mediaUrl, user, price, currency }) => {
  const classes = useStyles();
    name = "Name";
    likes = 1500;
    mediaUrl = "/images/nft.jpg";
//     user = {
//     "avatar":{
//        "url":"String"
//     },
//     "verified":"Boolean"
//  };
    price = "~12.2";
    currency = "ETH";

  return (
    <Card className={classes.card}>
        <User />
      <CardMedia
        className={classes.media}
        image={mediaUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          {name}
        </Typography>
        <Typography variant="body1" className={classes.price}>
          {`${price} ${currency}`}
        </Typography>
        <Chip label={millify(likes)} color="primary" className={classes.likes} />
      </CardContent>
    </Card>
  );
};

export default CardComponent;
