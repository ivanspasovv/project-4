import React, { useState, useEffect } from 'react';
import { Card, CardContent, Chip, CircularProgress } from '@mui/material';
import millify from 'millify';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from "../avatar/Avatar";
import CircleIcon from '@mui/icons-material/Circle';
import styles from "./Card.module.scss";
import Countdown, {zeroPad} from 'react-countdown';

export default function CardComponent ({ 
  name = "",
  likes = 0,
  mediaUrl = "",
  price = "",
  currency = "",
  timeLeft = 0 ,
  user = {
    avatar:{
        url:""
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

  const renderer = ({ hours, minutes, seconds }) => (
    <p className={styles.countdown}>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </p>
  );

  return (

    <Card className={styles.card} style={{ backgroundColor: isLive ? 'rgba(36, 242, 94, 0.1)' : '#181828' }}>
      <CardContent>
        <Avatar size={30} url={user.avatar.url} verified={user.verified} className={styles.avatar} />
        <div className={styles.live}>
          {isLive && (
          <div className={styles.badge}>
            <CircleIcon fontSize='string'/>
            <span  style={{ marginLeft: '0.5rem' }}>
              Live
            </span>
          </div>
          )}
          <img 
            className={styles.media}
            src={mediaUrl}
          />
          {isLive && timeLeft > 0 ? (
            <Countdown date={Date.now() + timeLeft} renderer={renderer}/>
            ) : null}
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
    </Card >
  );
};