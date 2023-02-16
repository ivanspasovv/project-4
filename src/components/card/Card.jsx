import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import millify from 'millify';
import Avatar from "../avatar/Avatar";
import styles from "./Card.module.scss";

const useStyles = makeStyles({
  card: {
    maxWidth: "18rem",
    margin: '5rem',
  },
  media: {
    height: 0,
    paddingTop: '100%', 
  },
});

export default function CardComponent ({ name, likes, mediaUrl, user, price, currency }) {
  const classes = useStyles();
    name = "Name";
    likes = 1500;
    mediaUrl = "/images/nft.jpg";
    price = "~12.2";
    currency = "ETH";
    user = {
    avatar:{
        url:"/images/avatar.png"
    },
        verified: true
    };
    

  return (
    <Card className={classes.card}>
        <Avatar url={user.avatar.url} verified className={classes.avatar}/>
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

