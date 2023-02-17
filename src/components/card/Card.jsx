import React from 'react';
import { Card as CardMUI, CardContent, Chip } from '@mui/material';
import millify from 'millify';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from "../avatar/Avatar";
import styles from "./Card.module.scss";


export default function Card ({ name, likes, mediaUrl, user, price, currency }) {
    name = "Clock";
    likes = 0;
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
      <CardContent>
        <Avatar url={user.avatar.url} verified className={styles.avatar}/>
        <div>
          <img 
            className={styles.media}
            src={mediaUrl}
          />
        </div>
        <div className={styles.info}>
          <div>
            <div className={styles.title}>
              {name}
            </div>
            <div className={styles.price}>
              {`${price} ${currency}`}
            </div>
          </div>
          <div>
            <Chip 
              label={millify(likes)} 
              color="success" 
              icon={<FavoriteIcon className={styles.favoriteIcon}/>}
              className={styles.likes} 
              variant="outlined"/>
          </div>
        </div>
      </CardContent>
    </CardMUI >
  );
};

