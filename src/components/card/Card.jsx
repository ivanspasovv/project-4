import React from 'react';
import { Card as CardMUI, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import millify from 'millify';
import Avatar from "../avatar/Avatar";
import styles from "./Card.module.scss";


export default function Card ({ name, likes, mediaUrl, user, price, currency }) {
    name = "Name";
    likes = 1100;
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
    <CardMUI className={styles.card}>
        <Avatar url={user.avatar.url} verified className={styles.avatar}/>
      <CardMedia
        className={styles.media}
        image={mediaUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className={styles.title}>
          {name}
        </Typography>
        <Typography variant="body1" className={styles.price}>
          {`${price} ${currency}`}
        </Typography>
        <Chip label={millify(likes)} color="success" className={styles.likes} />
      </CardContent>
    </CardMUI >
  );
};

