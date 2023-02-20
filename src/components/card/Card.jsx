import React, { useState, useEffect } from 'react';
import { Card, CardContent, Chip, CircularProgress } from '@mui/material';
import millify from 'millify';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from "../avatar/Avatar";
import CircleIcon from '@mui/icons-material/Circle';
import styles from "./Card.module.scss";
import Countdown from 'react-countdown';

export default function CardComponent ({ 
  name = "Clock",
  likes = 0,
  mediaUrl = "/images/nft.jpg",
  price = "~12.2",
  currency = "ETH",
  timeLeft = 0 ,
  user = {
    avatar:{
        url:"/images/avatar.png"
    },
        verified: true
    }, 
  }) 
{

  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    if (timeLeft) {
      setIsLive(true);
    }
  }, [timeLeft]);

  return (

    <Card className={styles.card}>
      <CardContent>
        <Avatar url={user.avatar.url} verified={user.verified} className={styles.avatar} />
        <div>
          {isLive && (
          <div className={styles.badge}>
            <CircleIcon />
            <span  style={{ marginLeft: '0.5rem' }}>
              Live
            </span>
          </div>
          )}
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
        {isLive && timeLeft > 0 ? (
          <Countdown timeLeft={timeLeft} />
        ) : null}
      </CardContent>
    </Card >
  );
};